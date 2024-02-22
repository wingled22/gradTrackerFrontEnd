import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/AccordionList.css";
import AlumnustItem from './AlumnusItem';
import React, {useEffect, useState } from "react";
import {
  Button,
  Container,
  Accordion,
  AccordionItem,
  AccordionBody,
  AccordionHeader,
  Input,
  Card,
  CardBody,
  Collapse,
} from "reactstrap";

const AccordionList = () => {

  const [alumni, setAlumni] = useState([]);

  const containerStyle = {
    width: "1200px",
    height: "500px",
    backgroundColor: "#D9D9D9",
    maxHeight: "400px",

    borderRadius: "20px",
    overflow: "auto",
  };

  const accordionStyle = {
    borderRadius: "20px",
    marginBottom: "5px",
  };

  const [hover, setHover] = useState(false);

  // onHover function
  const onHover = () => {
      setHover(!hover);
  };

  //This is for the opening and closing of the Accordion
  const [open, setOpen] = useState("0");
  const toggle = (id) => {
    if (open === id) {
      setOpen("0");
    } else if (hover) {
      setOpen("0");
    } else {
      setOpen(id);
    }
  };

  //This is for the check and unchecking of checbox


  //FETCHING THE DATA OF THE ALUMNI
  useEffect(() => {
    getAlumni();

  }, []);

  const getAlumni = async () => 
  {
    try {
      
      const response = await fetch("http://localhost:5134/api/Alumni");
      const data = await response.json();
      setAlumni(data);

      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
    
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Container className="accordionContainer" style={containerStyle}>
          <Accordion open={open} toggle={toggle} className="mt-4" style={accordionStyle}>

            {alumni.length === 0 && "No Alumni Information"}

            {alumni.map((alumnus) => (
              <AlumnustItem key={alumnus.id} alumnus={alumnus}/>
            ))}

          </Accordion>
        </Container>
      </div>
    </>
  );
};

export default AccordionList;
