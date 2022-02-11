const jwt = require("jsonwebtoken");
require("dotenv").config();
const getAuth = require("firebase/auth");

//this middleware will continue on if the token is inside the local storage

module.exports = function (req, res, next) {
  // Get token from header
  const idToken = req.header("firebase_token");

  getAuth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      console.log("I guess it worked...");
      req.userId = uid;
      next();
      // ...
    })
    .catch((error) => {
      res.status(401).json({ msg: "Token is not valid or Firebase Error" });
    });

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
