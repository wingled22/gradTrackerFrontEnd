import React from "react";
// import LoginHeader from "./LoginPage/LoginHeader";
import { Row, Col, Input, Form, Button } from "reactstrap";
import "../src/LoginPage/LoginPage.css";
import crmclogo from "../src/assets/CRMC_LOGO1.png";
import LoginForm from "./LoginPage/FormLogin";
const Login = () => {
  return (
    <>
      <Row>
        {/* <div style={{ backgroundColor: "#FF862D", height: 45 }}></div> */}

        {/* <LoginHeader /> */}

        <div className="Logo">
          <img src={crmclogo} alt="" className="crmc-logo" />
        </div>

        <div className="label-welcome">
          <h2 className="text-welcome">WELCOME</h2>
        </div>

        <LoginForm />
      </Row>
    </>
  );
};

export default Login;
