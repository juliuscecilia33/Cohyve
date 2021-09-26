const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

// Routes

// Create Club
router.post("/", authorize, async (req, res) => {
  try {
    const { name, description, school, category } = req.body;
    const newClub = await pool.query(
      "INSERT INTO clubs (name, description, school, category) VALUES($1, $2, $3, $4) RETURNING *",
      [name, description, school, category]
    );

    let clubId = newClub.rows[0].club_id;

    // We automatically make the user that made that club a role of "Owner";
    const insertOwner = await pool.query(
      "INSERT INTO members (club_id, user_id, role, pending) VALUES($1, $2, 'Owner', false) RETURNING *",
      [clubId, req.user.id]
    );

    res.json(newClub.rows[0].club_id);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all Clubs
// In order for club to be publically shown/released on dashboard, club has to have a minimum of 6 members
router.get("/", authorize, async (req, res) => {
  try {
    const allClubs = await pool.query("SELECT * FROM clubs");
    res.json(allClubs.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get all Public/Officially Released Clubs

// Get list of clubs of certain user

// Get members of club

// Approve pending member
router.put("/:id/:user", authorize, async (req, res) => {
  try {
    const { id, user } = req.params;
    console.log(id, user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// User requests membership to club
router.post("/:id/request", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const insertMemberRequest = await pool.query(
      "INSERT INTO members (club_id, user_id, role, pending) VALUES($1, $2, 'Pending', true) RETURNING *",
      [id, req.user.id]
    );
    res.json(insertMemberRequest.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get a certain Club
router.get("/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const club = await pool.query(
      "SELECT * FROM clubs WHERE club_id = $1 RETURNING *",
      [id]
    );

    res.json(club.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Update a Club Name/Description

router.put("/:id", authorize, async (req, res) => {
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
router.delete("/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const deleteClub = await pool.query(
      "DELETE FROM clubs WHERE club_id = $1",
      [id]
    );
    res.json("Club was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
