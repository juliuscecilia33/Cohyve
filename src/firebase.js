import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "cohyve.firebaseapp.com",
  projectId: "cohyve",
  storageBucket: "cohyve.appspot.com",
  messagingSenderId: "814912928639",
  appId: "1:814912928639:web:b81586702f59bd116c384a",
  // no databaseURL
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebaseApp, db, auth, storage };
