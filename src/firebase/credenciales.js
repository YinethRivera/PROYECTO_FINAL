import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDL0UwEYKElIZU_rP6PZVVCmXKfNQvwvmQ",
  authDomain: "proyectofinal-ee1a0.firebaseapp.com",
  projectId: "proyectofinal-ee1a0",
  storageBucket: "proyectofinal-ee1a0.appspot.com",
  messagingSenderId: "502471366257",
  appId: "1:502471366257:web:261a60a78e1354c2d2edd0",
  measurementId: "G-TRZR3WDHPG",
};

// iniciar en Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth,app}