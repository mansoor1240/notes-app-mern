import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("loginUser") ? true : false
  );

  // REGISTER
  const registerUser = (userData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = users.some((user) => user.email === userData.email);

    if (emailExists) {
      return false;
    }

    users.push(userData);

    localStorage.setItem("users", JSON.stringify(users));

    return true;
  };

  // LOGIN
  const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userFound = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (userFound) {
      localStorage.setItem(
        "loginUser",
        JSON.stringify(userFound)
      );

      setIsLogin(true);

      return true;
    }

    return false;
  };

  // LOGOUT
  const logoutUser = () => {
    localStorage.removeItem("loginUser");
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
