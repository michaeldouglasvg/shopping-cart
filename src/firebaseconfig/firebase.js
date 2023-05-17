// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQYctNb7_gsCDi5yfpXYS_5nhIZKTmj4U",
  authDomain: "reservation-ad292.firebaseapp.com",
  projectId: "reservation-ad292",
  storageBucket: "reservation-ad292.appspot.com",
  messagingSenderId: "997354578063",
  appId: "1:997354578063:web:11a52c2e1eabb703d510fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)