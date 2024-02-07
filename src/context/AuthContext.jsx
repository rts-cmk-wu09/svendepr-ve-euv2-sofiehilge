import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const response = await axios.post("http://localhost:4000/auth/token", {
        username: data.user,
        password: data.password,
      });
      const { token, userId } = response.data;
      setToken(token);
      setUserId(userId);

      navigate("/schedule");
    } catch (error) {
      //handle login failure
      throw new Error("login failed");
    }
  };

  const logout = () => {
    // Log a message to indicate that logout function is being called
    console.log("Logging out...");

    //clear token and userId from state
    setToken(null);
    setUserId(null);

    navigate("/home"); //Redirect to home page after logout
  };

  

  return (
    <AuthContext.Provider value={{ token, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
