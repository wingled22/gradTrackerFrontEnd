import logo from "../assets/img/logo.svg";
import "../assets/css/NavigationBar.css";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="d-flex flex-row align-items-center justify-content-between">
      <div className="logo ms-5">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <ul className="links-items d-flex align-items-center text-light">
          <li className="mx-2 mt-3">Home</li>
          <li className="mx-2 mt-3">Alumni</li>
          <li className="mx-2 mt-3" onClick={()=>{
            authService.logout();
            navigate("/");
            }}>Logout</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
