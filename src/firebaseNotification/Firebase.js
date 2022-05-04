// Firebase Cloud Messaging Configuration File.
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBPG8tCv9tAGPtY5yZpGBhNV9rnPJLAH-E",
  authDomain: "uncappgym.firebaseapp.com",
  projectId: "uncappgym",
  storageBucket: "uncappgym.appspot.com",
  messagingSenderId: "187052842156",
  appId: "1:187052842156:web:a201b9a0a33628414bd309",
  measurementId: "G-EE62V64RFT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const messaging = getMessaging();

export const requestForToken = async () => {
  return getToken(messaging, {
    vapidKey:
      "BFt0ZsfLvdWvmob3d8-f4zvGQWCYNe-fsH-RejxdP4E1jxWMgYjntUoPlGknawboXV1l5nCbHm7wIQCu5_epOxs",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
