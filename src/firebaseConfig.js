import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging/sw";

const firebaseConfig = {
  apiKey: "AIzaSyBPG8tCv9tAGPtY5yZpGBhNV9rnPJLAH-E",
  authDomain: "uncappgym.firebaseapp.com",
  projectId: "uncappgym",
  storageBucket: "uncappgym.appspot.com",
  messagingSenderId: "187052842156",
  appId: "1:187052842156:web:a201b9a0a33628414bd309",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);
