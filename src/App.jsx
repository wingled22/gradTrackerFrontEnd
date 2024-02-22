import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import PersonalInfoModal from './PersonalInfoModal.jsx'
import AccordionList from './AccordionList';
import { Button, Modal, Row, Table, Form, Input } from "reactstrap";
import EmployeeHistory from "./components/EmpHistory";


function App() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <NavigationBar />
      <AccordionList />
      <PersonalInfoModal />
      <Footer />
      <EmployeeHistory toggled={modal} untoggle={toggle}></EmployeeHistory>

      {
       

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
