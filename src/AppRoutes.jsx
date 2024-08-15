import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Login";

const AppRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<App/>} />
        </Routes>
     );
}
 
export default AppRoutes;