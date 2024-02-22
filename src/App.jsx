import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import AccordionList from "./components/AccordionList.jsx";
import Searchc from "./components/Search-create.jsx";

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
