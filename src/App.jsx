import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import PersonalInfoModal from './PersonalInfoModal.jsx'

function App() {
  return (
    <>
      <NavigationBar />
      <PersonalInfoModal />
      <Footer />
    </>
  );
}

export default App;
