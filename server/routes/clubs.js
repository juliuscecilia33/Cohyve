const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

// Routes

// Create Club
router.post("/", authorize, async (req, res) => {
  try {
    const { name, description, school, category, established_in } = req.body;
    const newClub = await pool.query(
      "INSERT INTO clubs (name, description, school, category, established_in) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [name, description, school, category, established_in]
    );

    let clubId = newClub.rows[0].club_id;

    // We automatically make the user that made that club a role of "Owner";
    const insertOwner = await pool.query(
      "INSERT INTO members (club_id, user_id, role, pending) VALUES($1, $2, 'Owner', false) RETURNING *",
      [clubId, req.user.id]
    );

    // We automatically insert into Followers table set to 0
    const insertFollowersCount = await pool.query(
      "INSERT INTO total_followers(club_id, follower_count) VALUES($1, $2) RETURNING *",
      [clubId, 0]
    );

    res.json(newClub.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Club post
router.post("/:id/post", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const insertPost = await pool.query(
      "INSERT INTO posts(club_id, title, description) VALUES ($1, $2, $3) RETURNING *",
      [id, title, description]
    );

    res.json(insertPost.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get club post
router.get("/:id/post/:postid", authorize, async (req, res) => {
  try {
    const { id, postId } = req.params;

    const getClubPost = await pool.query(
      "SELECT * FROM posts WHERE club_id = $1 and post_id = $2",
      [id, postId]
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Delete club post
router.delete("/:id/post/:postid", authorize, async (req, res) => {
  try {
    const { id, postid } = req.params;

    const deleteClubPost = await pool.addListener.query(
      "DELETE FROM posts WHERE club_id = $1 and post_id = $2",
      [id, postid]
    );

    res.json("Post Deleted!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Edit club post
router.put("/:id/post/:postid", authorize, async (req, res) => {
  try {
    const { id, postid } = req.params;
    const { title, description } = req.body;

    const updateClubPost = await pool.query(
      "UPDATE posts SET title = $1, description = $2 WHERE club_id = $3 AND post_id = $4 RETURNING *",
      [title, description, id, postid]
    );

    res.json(updateClubPost.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get all Clubs
router.get("/", authorize, async (req, res) => {
  try {
    const allClubs = await pool.query("SELECT * FROM clubs");
    res.json(allClubs.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// If User doesn't follow that club, then user can follow a club
router.post("/:id/follow", authorize, async (req, res) => {
  try {
    const { id } = req.params;

    // Check if User follows that club;
    const followRes = await pool.query(
      "SELECT * FROM followers WHERE user_id = $1 and club_id = $2",
      [req.user.id, id]
    );

    if (followRes.rows.length > 0) {
      // If User follows that club, then user can unfollow a club

      // Remove follower from followers table
      const removeFollower = await pool.query(
        "DELETE FROM followers WHERE club_id = $1 and user_id = $2",
        [id, req.user.id]
      );
      // Decrement follower count of club
      const decrementFollowersCount = await pool.query(
        "UPDATE total_followers SET follower_count = follower_count - 1 WHERE club_id = $1",
        [id]
      );
      res.json("Unfollowed");
    } else {
      // Created new follow_count table; so have to update and set both followers table and follow_count table
      const insertFollower = await pool.query(
        "INSERT INTO followers(club_id, user_id) VALUES($1, $2) RETURNING *",
        [id, req.user.id]
      );

      // Increment follower count of club
      const incrementFollowersCount = await pool.query(
        "UPDATE total_followers SET follower_count = follower_count + 1 WHERE club_id = $1",
        [id]
      );
      res.json("Followed!");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get all Public/Officially Released Clubs
// In order for club to be publically shown/released on dashboard, club has to have a minimum of 6 members (we can filter out club members and check the length of return json)
router.get("/public", authorize, async (req, res) => {
  try {
    const allMembers = await pool.query(
      "SELECT club_id, count(*) member_count FROM members GROUP BY club_id"
    );
    let publicClubs = [];
    for (const index in allMembers.rows) {
      let memberCount = allMembers.rows[index]["member_count"];

      if (memberCount >= 6) {
        publicClubs.push(allMembers.rows[index]);
      }
    }
    console.log(publicClubs);
    res.json(publicClubs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get list of clubs of current user
router.get("/user/clubs", authorize, async (req, res) => {
  try {
    const userClubs = await pool.query(
      "SELECT club_id FROM members WHERE user_id = $1",
      [req.user.id]
    );
    res.json(userClubs.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get list of clubs of certain user
router.get("/:user/clubs", authorize, async (req, res) => {
  const { user } = req.params;

  try {
    const userClubs = await pool.query(
      "SELECT club_id FROM members WHERE user_id = $1",
      [user]
    );
    res.json(userClubs.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get members of club
router.get("/:id/members", authorize, async (req, res) => {
  const { id } = req.params;

  try {
    const allMembers = await pool.query(
      "SELECT * FROM members WHERE club_id = $1",
      [id]
    );
    res.json(allMembers.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Approve pending member
router.put("/:id/:user", authorize, async (req, res) => {
  try {
    const { id, user } = req.params;
    const updatePendingMember = await pool.query(
      "UPDATE members SET role = $1, pending = $2 WHERE user_id = $3 AND club_id = $4 RETURNING *",
      ["Member", false, user, id]
    );
    res.json(updatePendingMember.rows);
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
