import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import PersonalInfoModal from "./PersonalInfoModal.jsx";
import AccordionList from "./AccordionList";
import { Button, Modal, Row, Table, Form, Input } from "reactstrap";
import EmployeeHistory from "./components/EmpHistory";
import Searchc from "./Search-create";

function App() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [alumni, setAlumni] = useState([]);

  const getAlumni = async () => {
    try {
      const response = await fetch("http://localhost:5134/api/Alumni");
      const data = await response.json();
      setAlumni(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavigationBar />
      <Searchc getAlumni={getAlumni} />
      <AccordionList data={alumni} getAlumni={getAlumni} />
      <Footer />
    </>
  );
}

export default App;
