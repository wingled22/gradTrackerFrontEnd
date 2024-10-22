import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { decodeToken } from "react-jwt";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const token = await authService.login(username, password);
      const decodedToken = decodeToken(token);
      const userRole =
        decodedToken[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ];
      userRole === "Admin"
        ? navigate("/dashboard")
        : userRole === "User"
        ? navigate("/home")
        : navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="formPosition">
      <div>
        <label className="text-username">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="custom-input"
        />
      </div>
      <div>
        <label className="text-password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="custom-input"
        />
      </div>
      <button type="submit" className="button-login btn mt-2">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
