import React from "react";
import { Row, Col, Input, Form ,Button} from "reactstrap";


const LoginForm = () => {
    return ( 
    <>
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

            <Button className="button-login">Login</Button>
          </Form>
        </div>
    </>

     );
}
 
export default LoginForm;