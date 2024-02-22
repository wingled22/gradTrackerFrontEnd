import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import PersonalInfoModal from './PersonalInfoModal.jsx'
import AccordionList from './AccordionList';

function App() {
  return (
    <>
      <NavigationBar />
      <AccordionList />
      <PersonalInfoModal />
      <Footer />
    </>
  );
}

export default App;
