// Import the functions you need from the SDKs y// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqiASlbDbcnMJ6MDaov3Hb0v_9Z5Eve_w",
  authDomain: "castle-cuisine.firebaseapp.com",
  projectId: "castle-cuisine",
  storageBucket: "castle-cuisine.appspot.com",
  messagingSenderId: "758387652957",
  appId: "1:758387652957:web:4455ebfb046d39f10010b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;