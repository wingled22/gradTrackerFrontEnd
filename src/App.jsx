import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavigationBar />

      <Footer />
    </>
  );
}

export default App;
