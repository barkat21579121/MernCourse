import React, { createContext, useContext } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const updateToken = (newToken) => {
    return localStorage.setItem("token", newToken);
  };

  return (
    <TokenContext.Provider value={{ updateToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
};
