// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8e1bLWeZmBWi1y8AQ_0qDYWDghffgW2Y",
  authDomain: "flood-mail.firebaseapp.com",
  projectId: "flood-mail",
  storageBucket: "flood-mail.appspot.com",
  messagingSenderId: "198279741989",
  appId: "1:198279741989:web:6bb37c524ea6355235f5cc",
  measurementId: "G-S2GHM1L64E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
