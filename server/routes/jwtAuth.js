const router = require("express").Router();
const pool = require("../db");

// registering

router.post("/register", async (req, res) => {
    try {

        // 1. destructure the req.body (name, email, password, school)

        const { name, email, password, school } = req.body;

        // 2. Check if user exists (if user exists then throw error)

        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

        res.json(user.rows)

        // 3. Bcrypt the User Password

        // 4. Enter the new user inside our database

        // 5. Generate our jwt token
        
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = router;
