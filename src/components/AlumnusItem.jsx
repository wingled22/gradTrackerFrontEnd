import {
  Button,
  AccordionItem,
  AccordionBody,
  AccordionHeader,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/AccordionList.css";
import React, { useEffect, useState } from "react";
import EmployeeHistory from "./EmpHistory";

const AlumnusItem = ({ alumnus }) => {
  const {
    id,
    firstName,
    middleName,
    lastName,
    birthDate,
    sex,
    province,
    municipality,
    barangay,
    street,
    email,
    contactNumber,
    department,
    program,
    yearGraduated,
  } = alumnus;

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

  const [modal, setModal] = useState(false);
  const toggleEmpHistory = () => setModal(!modal);

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

  // state for the hover of input
  const [hover, setHover] = useState(false);

  // onHover function
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <EmployeeHistory
        toggled={modal}
        untoggle={toggleEmpHistory}
      ></EmployeeHistory>

      <AccordionItem style={accordionStyle} key={id}>
        <AccordionHeader
          targetId={id.toString()}
          className="accordionHeaderStyle"
        >
          <div className="d-flex">{firstName + " " + lastName}</div>
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              className="align-self-end checkBoxStyle"
              checked={selectedItems.includes(id)}
              onChange={() => handleCheckboxChange(id)}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            />
          </div>
        </AccordionHeader>

        <AccordionBody
          className="accordionBodyStyle"
          accordionId={id.toString()}
          style={{ backgroundColor: "#F8F8F8" }}
        >
          <span className="nameLabel">
            {" "}
            <b> Name : </b> {firstName + " " + lastName}
          </span>{" "}
          <br />
          <span className="genderLabel">
            {" "}
            <b>Sex :</b> {sex}
          </span>{" "}
          <br />
          <span className="birthDateLabel">
            <b>Birthdate :</b> {birthDate}
          </span>{" "}
          <br />
          <span className="addressLabel">
            <b>Address :</b>{" "}
            {street + ", " + barangay + ", " + municipality + ", " + province}
          </span>{" "}
          <br /> <br />
          <span className="contactLabel">
            <b>Contact Number :</b> {contactNumber}
          </span>{" "}
          <br />
          <span className="emailAddLabel">
            <b>Email Address :</b> {email}
          </span>{" "}
          <br /> <br />
          <div style={departmentStyle}>
            <span className="departmentLabel">
              <b>Department :</b> {department}
            </span>{" "}
            <br />
            <span className="programLabel">
              <b>Program :</b> {program}
            </span>{" "}
            <br />
            <span className="yearGraduatedLabel">
              <b>Year Graduated :</b> {yearGraduated}
            </span>{" "}
            <br /> <br />
          </div>
          <div className="d-flex justify-content-end">
            <Button
              color="success"
              className="mr-2"
              style={buttonStyle}
              onClick={toggleEmpHistory}
            >
              Employment History
            </Button>
            <Button color="success" style={buttonStyle}>
              Update
            </Button>
          </div>
        </AccordionBody>
      </AccordionItem>
    </>
  );
};

export default AlumnusItem;
