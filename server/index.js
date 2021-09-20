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
        const { club_name, description } = req.body;
        const newClub = await pool.query(
          "INSERT INTO club (name, description) VALUES($1, $2) RETURNING *",
          [club_name, description]
        );
    
        res.json(newClub.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Get all Clubs
app.get("/clubs", async(req, res) => {
    try {
        const allClubs = await pool.query("SELECT * FROM club");
        res.json(allClubs.rows);
    } catch (err) {
        console.error(err.message);
    }
})

// Get a certain Club
app.get("/clubs/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const club = await pool.query("SELECT * FROM club WHERE club_id = $1", [
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
    const { club_name, description } = req.body;
    const updateClub = await pool.query(
      "UPDATE club SET name = $1, description = $2 WHERE club_id = $3",
      [club_name, description, id]
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
    const deleteClub = await pool.query("DELETE FROM club WHERE club_id = $1", [
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
