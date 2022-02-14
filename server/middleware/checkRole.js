const pool = require("../db");
const { adminApp } = require("../modules/firebase");

//this middleware will check the user role and determine actions they can take

// const serviceAccount = {
//   type: "service_account",
//   project_id: "cohyve",
//   private_key_id: process.env.adminsdkPrivateKeyId,
//   private_key: process.env.adminsdkPrivateKey,
//   client_email: process.env.adminsdkClientEmail,
//   client_id: process.env.adminsdkClientId,
//   auth_uri: process.env.adminsdkAuthUri,
//   token_uri: process.env.adminsdkTokenUri,
//   auth_provider_x509_cert_url: process.env.adminsdkAuthProviderX509CertUrl,
//   client_x509_cert_url: process.env.adminsdkClientX509CertUrl,
// };

// const admin = require("firebase-admin");

// const adminApp = admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

module.exports = async function (req, res, next) {
  try {
    const { id } = req.params;

    const checkUserRole = await pool.query(
      "SELECT role FROM members WHERE club_id = $1 and firebase_user_id = $2",
      [id, req.userId]
    );

    console.log("outside: ", req.userId);

    if (
      checkUserRole.rows[0].role === "Owner" ||
      checkUserRole.rows[0].role === "President" ||
      checkUserRole.rows[0].role === "Vice President" ||
      checkUserRole.rows[0].role === "Secretary" ||
      checkUserRole.rows[0].role === "Treasurer"
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
