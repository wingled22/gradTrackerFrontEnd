import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { decodeToken, useJwt } from "react-jwt";
const user = JSON.parse(localStorage.getItem("user")); //

const PrivateRoute = ({ children }) => {
  const { decodedToken, isExpired } = useJwt(user);

  console.log(decodeToken);
  return decodeToken ? children : <Navigate to="/" />;
};

export default PrivateRoute;
