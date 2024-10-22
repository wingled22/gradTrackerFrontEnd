import React from "react";
import { Navigate } from "react-router-dom";
import { useJwt } from "react-jwt";

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  const { decodedToken, isExpired } = useJwt(user || "");

  if (!user) {
    console.log("No user token found");
    return <Navigate to="/" />;
  }

  if (decodedToken) {
    const userName =
      decodedToken[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
      ];
    const userRole =
      decodedToken[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ];
    const tokenExpiration = decodedToken.exp;
    const tokenIssuer = decodedToken.iss;

    console.log("User Name:", userName);
    console.log("User Role:", userRole);
    console.log("Token Expiration:", tokenExpiration);
    console.log("Token Issuer:", tokenIssuer);
  } else {
    console.log("Token is invalid or could not be decoded");
  }

  return user && !isExpired ? children : <Navigate to="/" />;
};

export default PrivateRoute;
