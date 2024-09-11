import React from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = () => {
  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default userProvider;
