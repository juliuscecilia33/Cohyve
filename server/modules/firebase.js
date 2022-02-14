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

const admin = require("firebase-admin");

const adminApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports.adminApp = adminApp;
