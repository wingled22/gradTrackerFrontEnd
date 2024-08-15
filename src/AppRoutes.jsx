import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<PrivateRoute><App/></PrivateRoute>} />
        </Routes>
     );
}
 
export default AppRoutes;