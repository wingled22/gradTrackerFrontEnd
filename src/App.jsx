import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import AccordionList from "./components/AccordionList.jsx";
import Searchc from "./components/Search-create.jsx";

function App() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [alumni, setAlumni] = useState([]);
  const [originalAlumni, setOriginalAlumni] = useState([]);
  const [mergedName, setMergedName] = useState('');


  const searchAlumni = (search)=>{
    setAlumni(originalAlumni);
    setAlumni(alums => {
      return alums.filter(alumnus => {
        const mergedName = (alumnus.firstName + " " + alumnus.lastName).toLowerCase();
        return mergedName.includes(search.toLowerCase());
      });
    });

    console.log(alumni);
  }

  const getAlumni = async () => {
    try {
      const response = await fetch("http://localhost:5134/api/Alumni");
      const data = await response.json();
      setAlumni(data);
      setOriginalAlumni(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavigationBar />
      <Searchc getAlumni={getAlumni} getSearchValue={searchAlumni} />
      <AccordionList data={alumni} getAlumni={getAlumni}/>
      <Footer />
    </>
  );
}

export default App;
