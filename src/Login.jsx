import React from "react";
import LoginHeader from "./LoginPage/LoginHeader";
import { Row, Col, Input, Form } from "reactstrap";
import "../src/LoginPage/LoginPage.css";
import crmclogo from "../src/assets/CRMC_LOGO1.png";

const Login = () => {
  return (
    <>
      <Row>
        <LoginHeader />

        <div className="Logo">
          <img src={crmclogo} alt="" className="crmc-logo" />
        </div>

        <div className="label-welcome">
          <h2 className="text-welcome">WELCOME</h2>
        </div>
          <div className="form-container">
          <Form className="formPosition">
            <div className="usernameFormat">
              <div className="text-username">Username</div>
              <Input
                type="text"
                className="form-control custom-input"
              />
              <br />
            </div>
            <div className="passwordFormat">
              <div className="text-password">Password</div>
              <Input
                type="password"

                className="form-control custom-input"
              />
              <br />
            </div>

            <div className="forgot-pass">
                <p>Forgot Password?</p>
            </div>
          </Form>
        </div>

        <div
          className="header-area"
          style={{ backgroundColor: "red", height: 500 }}
        ></div>
      </Row>
    </>
  );
};

export default Login;
