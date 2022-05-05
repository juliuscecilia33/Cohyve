const router = require("express").Router();
const authorize = require("../middleware/authorize");
const checkRole = require("../middleware/checkRole");
const pool = require("../db");

// Routes

// Create Club
router.post("/", authorize, async (req, res) => {
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
      school_id,
    } = req.body;
    const newClub = await pool.query(
      "INSERT INTO clubs (club_name, club_description, club_school, club_category, club_established_in, club_state, club_website, club_instagram, club_facebook, club_twitter, club_email, club_profileURL, club_bannerURL, club_school_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *",
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
        school_id,
      ]
    );

    let clubId = newClub.rows[0].club_id;

    console.log("user id from req: ", req.userId);

    // We automatically make the user that made that club a role of "Owner";
    const insertOwner = await pool.query(
      "INSERT INTO members (club_id, firebase_user_id, role, pending, priority) VALUES($1, $2, 'Owner', false, 4) RETURNING *",
      [clubId, req.userId]
    );

    res.json(newClub.rows[0]);
  } catch (err) {
    console.log("creating a club error");
    console.error(err.message);
  }
});

// Edit Club Information
router.put("/:id", authorize, checkRole, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      school,
      school_id,
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
      "UPDATE clubs SET club_name = $1, club_description = $2, club_school = $3, club_category = $4, club_established_in = $5, club_state = $6, club_website = $7, club_instagram = $8, club_facebook = $9, club_twitter = $10, club_email = $11, club_profileURL = $12, club_bannerURL = $13, club_hero = $14, club_feed = $15, club_theme = $16, club_school_id = $17 WHERE club_id = $18",
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
        school_id,
        id,
      ]
    );

    res.json(updateClubInfo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Club post
router.post("/:id/post", authorize, checkRole, async (req, res) => {
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
    // req.user.id

    const { id, postid } = req.params;

    const getClubPost = await pool.query(
      "SELECT * FROM posts WHERE club_id = $1 and post_id = $2",
      [id, postid]
    );

    res.json(getClubPost.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Delete club post
router.delete("/:id/post/:postid", authorize, checkRole, async (req, res) => {
  try {
    const { id, postid } = req.params;
    const deleteClubPost = await pool.query(
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
router.put("/:id/post/:postid", authorize, checkRole, async (req, res) => {
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
router.get("/", async (req, res) => {
  try {
    const allClubs = await pool.query("SELECT * FROM clubs");
    res.json(allClubs.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get posts along with specific club and user data
router.get("/getpostswithclubanduser", async (req, res) => {
  try {
    const clubs = await pool.query(
      "SELECT posts.post_id, posts.club_id, posts.title, posts.description, posts.created_at, posts.firebase_user_id, posts.on_community, posts.post_images, posts.post_type, posts.post_location, posts.post_date, posts.post_text, posts.post_location_details, posts.post_date_details, posts.post_whatwedo, posts.post_purpose, posts.post_contact, posts.post_support_links, posts.post_support_goal, posts.is_pinned, clubs.club_name, clubs.club_profileURL, users.profileURL, users.username, users.name, posts_partners.club_partner, members.role FROM posts FULL JOIN clubs ON clubs.club_id = posts.club_id FULL JOIN users ON posts.firebase_user_id = users.firebase_user_id FULL JOIN members ON posts.firebase_user_id = members.firebase_user_id FULL JOIN posts_partners ON posts.post_id = posts_partners.post_id WHERE posts.club_id = 36"
    );
    res.json(clubs.rows);
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
      "SELECT * FROM followers WHERE firebase_user_id = $1 and club_id = $2",
      [req.userId, id] //og req.user.id
    );

    if (followRes.rows.length > 0) {
      // If User follows that club, then user can unfollow a club

      // Remove follower from followers table
      const removeFollower = await pool.query(
        "DELETE FROM followers WHERE club_id = $1 and firebase_user_id = $2",
        [id, req.userId]
      );
      // Decrement follower count of club
      const decrementFollowersCount = await pool.query(
        "UPDATE clubs SET follower_count = follower_count - 1 WHERE club_id = $1",
        [id]
      );
      res.json("Unfollowed");
    } else {
      // Created new follow_count table; so have to update and set both followers table and follow_count table
      const insertFollower = await pool.query(
        "INSERT INTO followers(club_id, firebase_user_id) VALUES($1, $2) RETURNING *",
        [id, req.userId]
      );

      // Increment follower count of club
      const incrementFollowersCount = await pool.query(
        "UPDATE clubs SET follower_count = follower_count + 1 WHERE club_id = $1",
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
      "SELECT club_id, count(*) member_count FROM members WHERE pending = false GROUP BY club_id"
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
      "SELECT club_id FROM members WHERE firebase_user_id = $1",
      [req.userId]
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
      "SELECT club_id FROM members WHERE firebase_user_id = $1",
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
router.put("/:id/:user", authorize, checkRole, async (req, res) => {
  try {
    const { id, user } = req.params;
    const updatePendingMember = await pool.query(
      "UPDATE members SET role = $1, pending = $2 WHERE firebase_user_id = $3 AND club_id = $4 RETURNING *",
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
      "INSERT INTO members (club_id, firebase_user_id, role, pending) VALUES($1, $2, 'Pending', true) RETURNING *",
      [id, req.userId]
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

// Delete a Club
router.delete("/:id", authorize, checkRole, async (req, res) => {
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
