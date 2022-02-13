const express = require("express");
const app = express();
const cors = require("cors");
const { initializeApp } = require("firebase-admin/app");
require("dotenv").config();

const serviceAccount = {
  type: "service_account",
  project_id: "cohyve",
  private_key_id: process.env.adminsdkPrivateKeyId,
  private_key: process.env.adminsdkPrivateKey,
  client_email: process.env.adminsdkClientEmail,
  client_id: process.env.adminsdkClientId,
  auth_uri: process.env.adminsdkAuthUri,
  token_uri: process.env.adminsdkTokenUri,
  auth_provider_x509_cert_url: process.env.adminsdkAuthProviderX509CertUrl,
  client_x509_cert_url: process.env.adminsdkClientX509CertUrl,
};

//middleware

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/jwtAuth"));

app.use("/clubs", require("./routes/clubs"));

app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});
