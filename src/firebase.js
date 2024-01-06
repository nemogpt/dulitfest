// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGl-AMhP8M_a6NabRfQvX7UTTHKec1cyo",
  authDomain: "dulitfest-63556.firebaseapp.com",
  projectId: "dulitfest-63556",
  storageBucket: "dulitfest-63556.appspot.com",
  messagingSenderId: "508371176009",
  appId: "1:508371176009:web:02c4ff0ad24226d2bb8d98",
  measurementId: "G-ZDM7LS39H9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);