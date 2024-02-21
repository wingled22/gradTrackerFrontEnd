import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Row, Table, Form, Input } from "reactstrap";
import EmployeeHistory from "./components/EmpHistory";




function App() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <EmployeeHistory toggled={modal} untoggle={toggle}></EmployeeHistory>

      {
        /* <div>
        <FontAwesomeIcon icon={faCoffee} />
        
        <span> This is a coffee icon.</span>
      </div> */

        <Button
          color="info"
          onClick={() => {
            toggle();
          }}
        >
          View Employment History
        </Button>
      }
    </>
  );
}

export default App;
