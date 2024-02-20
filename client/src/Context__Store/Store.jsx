import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [remToken, setRemToken] = useState(localStorage.getItem("token"));
  const [state, setState] = useState(false);
  const [data, setData] = useState();

  const updateToken = (newToken) => {
    setRemToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const deleteToken = () => {
    setRemToken("");
    localStorage.removeItem("token");
  };

  const config = {
    headers: { Authorization: `Bearer ${remToken}` },
  };

  useEffect(() => {
    const userAuthentication = async () => {
      try {
        await axios
          .get("http://localhost:3001/api/auth/user", config)
          .then((res) => {
            setData(res.data.msg);
            setState(true);
          });
      } catch (error) {}
    };

    if (remToken) {
      userAuthentication();
    }
  }, [remToken]);

  const HandleToggle = !!remToken;

  return (
    <TokenContext.Provider
      value={{ updateToken, deleteToken, HandleToggle, data, state }}
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
