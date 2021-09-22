const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json()); // request HTTP body and convert to JSON

// Routes

// Create Club
app.post("/clubs", async(req, res) => {
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
app.get("/clubs", async(req, res) => {
    try {
        const allClubs = await pool.query("SELECT * FROM clubs");
        res.json(allClubs.rows);
    } catch (err) {
        console.error(err.message);
    }
})

// Get a certain Club
app.get("/clubs/:id", async(req, res) => {
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

app.put("/clubs/:id", async (req, res) => {
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
app.delete("/clubs/:id", async (req, res) => {
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

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
