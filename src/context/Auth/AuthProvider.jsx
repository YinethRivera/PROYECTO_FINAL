import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/credenciales";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('USER')) ?? null);

  const startSession = async (email, password) => {
    try {
      const { user: userFirebase } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      await fetch(`http://localhost:3000/usuarios/uid/${userFirebase.uid}`)
        .then((res) => res.json())
        .then((res) => {
          const userLoger = {...res, ...userFirebase };
          setUser(userLoger);
          sessionStorage.setItem("USER", JSON.stringify(userLoger));
        });
    } catch (error) {
      console.log("error al ingresar a la cuenta", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, startSession, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
