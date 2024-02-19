import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [remToken, setRemToken] = useState(localStorage.getItem("token"));
  const [data, setData] = useState();
  const updateToken = (newToken) => {
    return localStorage.setItem("token", newToken);
  };

  const HandleToggle = !!remToken;
  const deleteToken = () => {
    setRemToken("");
    return localStorage.removeItem("token");
  };
  const config = {
    headers: { Authorization: `Bearer ${remToken}` },
  };
  const userAuthentication = async () => {
    try {
      await axios
        .get("http://localhost:3001/api/auth/user", config)
        .then((res) => {
          setData(res.data.msg);
          console.log(res.data.msg);
        });
    } catch (error) {}
  };
  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <TokenContext.Provider
      value={{ updateToken, deleteToken, HandleToggle, data }}
    >
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
