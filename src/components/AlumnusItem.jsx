import {
  Button,
  AccordionItem,
  AccordionBody,
  AccordionHeader,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/AccordionList.css";
import React, { useEffect, useState } from "react";
import EmploymentHistory from "./EmpHistory";
import PersonalInfoModal from "./PersonalInfoModal";

// to format the dates
const formatDate = (dateString) => {
  let date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const AlumnusItem = ({
  alumnus,
  hover,
  setHover,
  addBatchID,
  deleteBatchID,
  getAlumni,
}) => {
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
  const [updateAlumnusModal, setUpdateAlumnusModal] = useState(false);
  const toggleEmpHistory = () => setModal(!modal);
  const toggleUpdatePersonalInfoModal = () =>
    setUpdateAlumnusModal(!updateAlumnusModal);

  const [selectedAlumniID, setSelectedAlumniID] = useState(0);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (item) => {
    const updatedSelection = [...selectedItems];

    if (updatedSelection.includes(item)) {
      //If unchecked
      console.log("removed item");

      updatedSelection.splice(updatedSelection.indexOf(item), 1);

      //pass it to other functional component and delete the id that handle this
      deleteBatchID(item);
    } else {
      //Else checked
      console.log("added item");
      updatedSelection.push(item);

      //pass it to other functional component and add this to the array
      addBatchID(item);
    }

    setSelectedItems(updatedSelection);
  };

  // state for the hover of input

  // onHover function
  const onHover = () => {
    setHover(!hover);
  };

  const toggleEmploymentHistory = (id) => {
    toggleEmpHistory();
    setSelectedAlumniID(id);
  };
  return (
    <>
      {modal ? (
        <EmploymentHistory
          toggled={modal}
          untoggle={toggleEmpHistory}
          selectedAlumniID={selectedAlumniID}
        />
      ) : (
        ""
      )}
      {updateAlumnusModal ? (
        <PersonalInfoModal
          toggled={updateAlumnusModal}
          untoggle={toggleUpdatePersonalInfoModal}
          alumnus={alumnus}
          isCreate={false}
          getAlumni={getAlumni}
        />
      ) : (
        ""
      )}

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
            <b>Birthdate :</b> {formatDate(birthDate)}
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
              <b>Year Graduated :</b> {formatDate(yearGraduated)}
            </span>{" "}
            <br /> <br />
          </div>
          <div className="d-flex justify-content-end">
            <Button
              color="success"
              className="mr-2"
              style={buttonStyle}
              onClick={() => toggleEmploymentHistory(id)}
            >
              Employment History
            </Button>
            <Button
              color="success"
              style={buttonStyle}
              onClick={toggleUpdatePersonalInfoModal}
            >
              Update
            </Button>
          </div>
        </AccordionBody>
      </AccordionItem>
    </>
  );
};

export default AlumnusItem;
