import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import getAuthSession from "../../utils/get-auth-session";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getAuthSession() ?? null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
