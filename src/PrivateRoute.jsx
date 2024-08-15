import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user')); // Retrieve the user from localStorage

  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
