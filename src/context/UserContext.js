// UserContext.js
import React, { createContext, useContext, useState,useEffect } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const storedUserData = JSON.parse(localStorage.getItem("username"));
  
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("username", JSON.stringify(userData));
    console.log("login fn working", userData);
  };


  const logout = () => {
    setUser(null);
    console.log("logout fn working",storedUserData)
  };
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("username"));
    if (storedUserData) {
      setUser(storedUserData);
    }
  }, []);

  return (
     <UserContext.Provider value={{ user,login,logout}}>
      {children}
    </UserContext.Provider>
  );
}
