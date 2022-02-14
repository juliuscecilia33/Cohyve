// import adminApp from "../modules/firebase";
const { adminApp } = require("../modules/firebase");
const jwt = require("jsonwebtoken");
const { initializeApp } = require("firebase-admin/app");
require("dotenv").config();
require("firebase/auth");

//this middleware will continue on if the token is inside the local storage

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

module.exports = function (req, res, next) {
  // Get token from header
  const idToken = req.header("firebase_token");

  if (!idToken) {
    return res
      .status(403)
      .json({ msg: "authorization denied or idtoken not found" });
  }

  console.log("Before adminApp");

  console.log(idToken);

  adminApp
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      console.log(decodedToken);
      const uid = decodedToken.uid;
      console.log("I guess it worked...");
      req.userId = uid;
      next();
    })
    .catch((error) => {
      res.status(401).json({ msg: "Token is not valid or Firebase Error" });
      console.log("error on adminApp ~ authorize");
    });

  console.log("after adminApp");

  // // Check if not token
  // if (!token) {
  //   return res.status(403).json({ msg: "authorization denied" });
  // }

  // Verify token
  // try {
  //   // Essentially a payload
  //   const verify = jwt.verify(token, process.env.jwtSecret);

  //   req.user = verify.user;
  //   next();
  // } catch (err) {
  //   res.status(401).json({ msg: "Token is not valid" });
  // }
};
