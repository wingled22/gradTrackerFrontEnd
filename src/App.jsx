import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import PersonalInfoModal from './PersonalInfoModal.jsx'
import AccordionList from './AccordionList';
import { Button, Modal, Row, Table, Form, Input } from "reactstrap";
import EmployeeHistory from "./components/EmpHistory";
import Searchc from './Search-create';


function App() {

  return (
    <>
      <NavigationBar />
      <Searchc/>
      <AccordionList />
      <PersonalInfoModal />
      <Footer />
    
    
      
    </>
  );
}

export default App;
