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

router.put("/edituser/:uid", authorize, async (req, res) => {
  try {
    const { firebase_user_id, school, profileURL, bannerURL, description } =
      req.body;

    const updateUserInfo = await pool.query(
      "UPDATE users SET school = $2, profileURL = $3, bannerURL = $4, description = $5 WHERE firebase_user_id = $1",
      [firebase_user_id, school, profileURL, bannerURL, description]
    );

    res.json(updateUserInfo);
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
