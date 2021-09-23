const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

// registering

router.post("/register", async (req, res) => {
  try {
    // 1. destructure the req.body (name, email, password, school)

    const { name, email, password, school } = req.body;

    // 2. Check if user exists (if user exists then throw error)

    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length > 0) {
      return res.status(401).json("User already exist!");
    }

    // 3. Bcrypt the User Password
    const saltRound = 10; // how encrypted the password will be
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    // 4. Enter the new user inside our database

    const newUser = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password, school) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, bcryptPassword, school]
    );

    // res.json(newUser.rows[0]);

    // 5. Generate our jwt token

    const jwtToken = jwtGenerator(newUser.rows[0].user_id);

    res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
