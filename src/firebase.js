import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "cohyve.firebaseapp.com",
  projectId: "cohyve",
  storageBucket: "cohyve.appspot.com",
  messagingSenderId: "814912928639",
  appId: "1:814912928639:web:b81586702f59bd116c384a",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export { firebaseApp, db, storage, ref, uploadBytesResumable, getDownloadURL };
