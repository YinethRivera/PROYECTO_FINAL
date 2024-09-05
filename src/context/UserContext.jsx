import { createContext, useContext, useState } from "react";
import getAuthSession from "../utils/get-auth-session";

export const UserContext = createContext();

// Proveedor de contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getAuthSession() ?? null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useAuth = () => useContext(UserContext);
export default useAuth;
