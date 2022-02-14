// import adminApp from "../modules/firebase";
const { adminApp } = require("../modules/firebase");
require("dotenv").config();
require("firebase/auth");

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
};
