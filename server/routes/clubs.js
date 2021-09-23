const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

// Routes

// Create Club
router.post("/", async(req, res) => {
    try {
        const { name, description, school, category } = req.body;
        const newClub = await pool.query(
          "INSERT INTO clubs (name, description, school, category) VALUES($1, $2, $3, $4) RETURNING *",
          [name, description, school, category]
        );
    
        res.json(newClub.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Get all Clubs
router.get("/", async(req, res) => {
    try {
        const allClubs = await pool.query("SELECT * FROM clubs");
        res.json(allClubs.rows);
    } catch (err) {
        console.error(err.message);
    }
})

// Get a certain Club
router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const club = await pool.query("SELECT * FROM clubs WHERE club_id = $1 RETURNING *", [
        id
        ]);

        res.json(club.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// Update a Club Name/Description

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, school, category } = req.body;
    const updateClub = await pool.query(
      "UPDATE clubs SET name = $1, description = $2, school = $3, category = $4 WHERE club_id = $5 RETURNIING *",
      [name, description, school, category, id]
    );

    res.json("Club was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

// Delete a Club
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteClub = await pool.query("DELETE FROM clubs WHERE club_id = $1", [
      id
    ]);
    res.json("Club was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;