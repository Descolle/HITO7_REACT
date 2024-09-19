import { useState } from "react";
import { createContext } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [token, setToken] = useState("true");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <MyContext.Provider
      value={{ token, setToken, user, setUser, password, setPassword }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
