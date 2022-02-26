const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validate = require("../middleware/validInfo");
const authorize = require("../middleware/authorize");

// registering

router.post("/register", async (req, res) => {
  try {
    const { firebase_user_id, school, profileURL, bannerURL, description } =
      req.body;

    let newUser = await pool.query(
      "INSERT INTO users (firebase_user_id, school, profileURL, bannerURL, description) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [firebase_user_id, school, profileURL, bannerURL, description]
    );

    return res.json(newUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

router.post("/login", async (req, res) => {
  try {
    // 1, Destructure the Req.body
    const { email, password } = req.body;

    // 2. Check if user doesn't exist (if not then we throw error)
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Password or Email is incorrect!");
    }

    // 3. Check if incoming password is the same as the database password (password is encrypted)
    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Password or Email is incorrect!");
    }

    // 4. give them the jwt token

    const jwtToken = jwtGenerator(user.rows[0].user_id);

    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

router.get("/userexists/:uid", async (req, res) => {
  try {
    const { uid } = req.params;

    console.log("uid from user exists: ", uid);

    const user = await pool.query(
      "SELECT * FROM users WHERE firebase_user_id = $1",
      [uid]
    );

    console.log(user);

    if (user.rows.length === 0) {
      console.log("false");
      res.json(false);
    } else {
      console.log("true");
      res.json(true);
    }
  } catch (error) {}
});

router.put("/edituser", authorize, async (req, res) => {
  try {
    const {
      name,
      description,
      school,
      category,
      established_in,
      state,
      website,
      instagram,
      facebook,
      twitter,
      email,
      profileURL,
      bannerURL,
      hero,
      feed,
      theme,
    } = req.body;

    const updateClubInfo = await pool.query(
      "UPDATE clubs SET name = $1, description = $2, school = $3, category = $4, established_in = $5, state = $6, website = $7, instagram = $8, facebook = $9, twitter = $10, email = $11, profileURL = $12, bannerURL = $13, hero = $14, feed = $15, theme = $16 WHERE club_id = $17",
      [
        name,
        description,
        school,
        category,
        established_in,
        state,
        website,
        instagram,
        facebook,
        twitter,
        email,
        profileURL,
        bannerURL,
        hero,
        feed,
        theme,
        id,
      ]
    );

    res.json(updateClubInfo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

router.post("/verify", authorize, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
