import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import UsersPage from "./UsersPage/UsersPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <App />
          </PrivateRoute>
        }
      />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <UsersPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
