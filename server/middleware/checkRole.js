const pool = require("../db");

//this middleware will check the user role and determine actions they can take

module.exports = async function (req, res, next) {
  try {
    const { id } = req.params;

    const checkUserRole = await pool.query(
      "SELECT role FROM members WHERE club_id = $1 and user_id = $2",
      [id, req.user.id]
    );

    if (
      checkUserRole.rows[0].role === "Owner" ||
      checkUserRole.rows[0].role === "President"
    ) {
      next();
    } else {
      res.status(403).send({ msg: "Role Denied" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
