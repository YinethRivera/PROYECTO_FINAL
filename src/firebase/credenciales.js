// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL0UwEYKElIZU_rP6PZVVCmXKfNQvwvmQ",
  authDomain: "proyectofinal-ee1a0.firebaseapp.com",
  projectId: "proyectofinal-ee1a0",
  storageBucket: "proyectofinal-ee1a0.appspot.com",
  messagingSenderId: "502471366257",
  appId: "1:502471366257:web:261a60a78e1354c2d2edd0",
  measurementId: "G-TRZR3WDHPG",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth,app,db}
