import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import UsersPage from "./UsersPage/UsersPage";
import NavigationBar from "./components/NavigationBar";
import UserRegistrationPage from "./UserRegistrationPage/UserRegistrationPage";

const AppRoutes = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<UserRegistrationPage />} />
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
    </>
  );
};

export default AppRoutes;
