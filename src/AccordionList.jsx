import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/AccordionList.css";
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

  const accordionHeaderStyle = {
    backgroundColor: "#FF862D !important",
  };

  const buttonStyle = {
    margin: "5px",
    height: "60px",
    width: "120px",
    backgroundColor: "#28A745",

    borderRadius: "22px",
  };

  const departmentStyle = {
    /* top right bottom left */

    margin: "-166px 0px -18px 450px",
  };

  // state for the hover of input
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
  const [selectedItems, setSelectedItems] = useState([]);
  const handleCheckboxChange = (item) => {
    const updatedSelection = [...selectedItems];

    if (updatedSelection.includes(item)) {
      updatedSelection.splice(updatedSelection.indexOf(item), 1);
    } else {
      updatedSelection.push(item);
    }

    setSelectedItems(updatedSelection);
  };


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
          <Accordion
            open={open}
            toggle={toggle}
            className="mt-4"
            style={accordionStyle}
          >
            {alumni.length === 0 && "No Alumni Information"}

            {alumni.map((alumnus) => (
              <AccordionItem style={accordionStyle} key={alumnus.id}>
                <AccordionHeader
                  targetId={alumnus.id.toString()}
                  className="accordionHeaderStyle"
                >
                  <div className="d-flex">{alumnus.firstName} + {alumnus.lastName}</div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="align-self-end checkBoxStyle"
                      checked={selectedItems.includes(alumnus.id)}
                      onChange={() => handleCheckboxChange(alumnus.id)}
                      onMouseEnter={onHover}
                      onMouseLeave={onHover}
                    />
                  </div>
                </AccordionHeader>

                <AccordionBody
                  className="accordionBodyStyle"
                  accordionId={alumnus.id.toString()}
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <span className="nameLabel">Name : {alumnus.firstName + " " + alumnus.lastName}</span>{" "}
                  <br />
                  <span className="genderLabel">Sex : {alumnus.sex}</span>{" "}
                  <br />
                  <span className="birthDateLabel">
                    Birthdate : {alumnus.birthDate}
                  </span>{" "}
                  <br />
                  <span className="addressLabel">
                    Address : {alumnus.street + ", " + alumnus.barangay + ", " + alumnus.municipality + ", " + alumnus.province}
                  </span> <br /> <br />
                  <span className="contactLabel">
                    Contact Number : {alumnus.contactNumber}
                  </span>{" "}
                  <br />
                  <span className="emailAddLabel">
                    Email Address : {alumnus.email}
                  </span>{" "}
                  <br /> <br />
                  <div style={departmentStyle}>
                    <span className="departmentLabel">
                      Department : {alumnus.department}
                    </span>{" "}
                    <br />
                    <span className="programLabel">
                      Program : {alumnus.program}
                    </span>{" "}
                    <br />
                    <span className="yearGraduatedLabel">
                      Year Graduated : {alumnus.yearGraduated}
                    </span>{" "}
                    <br /> <br />
                  </div>
                  <div className="d-flex justify-content-end">
                    <Button
                      color="success"
                      className="mr-2"
                      style={buttonStyle}
                    >
                      Employment History
                    </Button>
                    <Button color="success" style={buttonStyle}>
                      Update
                    </Button>
                  </div>
                </AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </div>
    </>
  );
};

export default AccordionList;
