import { createContext, useEffect, useState } from "react";
import { userObserver } from "../auth/Firebase";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContextProvider value={currentUser}>{children}</AuthContextProvider>
  );
};
export default AuthContextProvider;
