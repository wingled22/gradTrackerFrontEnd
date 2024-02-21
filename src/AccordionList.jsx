import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/AccordionList.css";
import React, { useState } from "react";
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
  const containerStyle = {
    width: "1400px",
    height: "500px",
    backgroundColor: "#D9D9D9",

    borderRadius: "20px",
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
      setOpen();
    } else if (hover) {
      setOpen();
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

  const personalInfos = [
    {
      id: "1",
      name: "Neil Chris Ursal",
      department: "College of Computer Studies",
      birthdate: "Karon",
    },
    {
      id: "2",
      name: "Kinsa ni",
      department: "College of Computer Studies gihapon",
      birthdate: "Ugma",
    },
  ];
  console.log(hover);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Container className="accordionContainer" style={containerStyle}>
          <Accordion
            open={open}
            toggle={toggle}
            className="mt-4"
            style={accordionStyle}
          >
            {personalInfos.map((personalInfo) => (
              <AccordionItem style={accordionStyle} key={personalInfo.id}>
                <AccordionHeader
                  targetId={personalInfo.id}
                  className="accordionHeaderStyle"
                >
                  <div className="d-flex">{personalInfo.name}</div>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="align-self-end checkBoxStyle"
                      checked={selectedItems.includes(personalInfo.id)}
                      onChange={() => handleCheckboxChange(personalInfo.id)}
                      onMouseEnter={onHover}
                      onMouseLeave={onHover}
                    />
                  </div>
                </AccordionHeader>

                <AccordionBody
                  accordionId={personalInfo.id}
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <span className="nameLabel">Name : {personalInfo.name}</span>{" "}
                  <br />
                  <span className="birthDateLabel">
                    Birthdate : {personalInfo.birthdate}
                  </span>{" "}
                  <br />
                  <span className="addressLabel">
                    Address : Sambag
                  </span> <br /> <br />
                  <span className="contactLabel">
                    Contact Number : 09213123123
                  </span>{" "}
                  <br />
                  <span className="emailAddLabel">
                    Email Address : emailniya@gmail.com
                  </span>{" "}
                  <br /> <br />
                  <div style={departmentStyle}>
                    <span className="departmentLabel">
                      Department : {personalInfo.department}
                    </span>{" "}
                    <br />
                    <span className="programLabel">
                      Program : Bachelor of Science in Tuba
                    </span>{" "}
                    <br />
                    <span className="yearGraduatedLabel">
                      Year Graduated : 2024
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
