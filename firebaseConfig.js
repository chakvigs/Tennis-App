// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdalvotk0vKfgZr1lXe4xyljBKMLTa-Nk",
  authDomain: "tennis-app-64040.firebaseapp.com",
  projectId: "tennis-app-64040",
  storageBucket: "tennis-app-64040.appspot.com",
  messagingSenderId: "54507489341",
  appId: "1:54507489341:web:e6ab33db69fb4b9d78c254",
  measurementId: "G-FS4VH5DBZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);