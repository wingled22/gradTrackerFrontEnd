import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import "../assets/css/PersonalInfoModal.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// to format the dates
const formatDate = (dateString) => {
  let date = new Date(dateString);
  return (
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0")
  );
};

const PersonalInfoModal = ({
  getAlumni,
  toggled,
  untoggle,
  alumnus,
  isCreate,
}) => {
  const [alumniCredentials, setAlumniCredentials] = isCreate
    ? useState({
        firstName: "",
        lastName: "",
        middleName: "",
        province: "",
        municipality: "",
        barangay: "",
        street: "",
        email: "",
        contactNumber: "",
        department: "",
        program: "",
        yearGraduated: "",
        birthDate: "",
        sex: "",
      })
    : useState(alumnus);

  // destructure the alumni creds
  const {
    id,
    firstName,
    lastName,
    middleName,
    province,
    municipality,
    barangay,
    street,
    email,
    contactNumber,
    department,
    program,
    yearGraduated,
    birthDate,
    sex,
  } = alumniCredentials;

  const formattedYearGraduated = formatDate(yearGraduated);
  const formattedBirthDate = formatDate(birthDate);

  // monitor changes in the alumni credentials
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumniCredentials((currentCreds) => ({
      ...currentCreds,
      [name]:
        name === "yearGraduated"
          ? formatDate(value)
          : name === "birthDate"
          ? formatDate(value)
          : value,
    }));
  };

  const resetForm = () => {
    setAlumniCredentials((prevCreds) => ({
      ...prevCreds,
      firstName: "",
      lastName: "",
      middleName: "",
      province: "",
      municipality: "",
      barangay: "",
      street: "",
      email: "",
      contactNumber: "",
      department: "",
      program: "",
      yearGraduated: "",
      birthDate: "",
      sex: "",
    }));
  };

  const toggle = () => {
    resetForm();
    untoggle();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5134/api/Alumni", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(alumniCredentials),
      });

      if (response.ok) {
        toast.success("Registered an alumni successfully");
        getAlumni();
      } else {
        toast.error("Something went wrong"); // Changed this line
      }
    } catch (error) {
      toast.error("Error submitting form data:" + error);
    } finally {
      resetForm();
      toggle();
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5134/api/Alumni/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(alumniCredentials),
      });

      if (response.ok) {
        toast.success("Updated an alumni successfully");
        getAlumni();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Error submitting form data:" + error);
    } finally {
      resetForm();
      toggle();
    }
  };

  return (
    <>
      <div>
        <Modal size="" isOpen={toggled} toggle={toggle}>
          <ModalHeader toggle={toggle} className="personal-info-header">
            Personal Information Form
          </ModalHeader>
          <ModalBody className="modal-body">
            <form onSubmit={isCreate ? handleSubmit : handleUpdate}>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={firstName}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="middleName">Middle Name</Label>
                    <Input
                      type="text"
                      name="middleName"
                      id="middleName"
                      value={middleName}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={lastName}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="sex">Sex</Label>
                    <Input
                      type="select"
                      name="sex"
                      id="sex"
                      value={sex}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Sex</option>
                      <option value="M">M</option>
                      <option value="F">F</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="birthDate">Birth Date</Label>
                    <Input
                      type="date"
                      name="birthDate"
                      id="birthDate"
                      value={isCreate ? birthDate : formattedBirthDate}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <hr className="separator" />
              <h5 className="group-title">Address Information</h5>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="province">Province</Label>
                    <Input
                      type="text"
                      name="province"
                      id="province"
                      value={province}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="municipality">City/Municipality</Label>
                    <Input
                      type="municipality"
                      name="municipality"
                      id="municipality"
                      value={municipality}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="barangay">Barangay</Label>
                    <Input
                      type="text"
                      name="barangay"
                      id="barangay"
                      value={barangay}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="street">Street</Label>
                    <Input
                      type="text"
                      name="street"
                      id="street"
                      value={street}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <hr className="separator" />
              <h5 className="group-title">Contact Information</h5>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="email">Email Address</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="contactNumber">Contact Number</Label>
                    <Input
                      type="text"
                      name="contactNumber"
                      id="contactNumber"
                      value={contactNumber}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <hr className="separator" />
              <h5 className="group-title">Department Information</h5>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="department">Department</Label>
                    <Input
                      type="select"
                      name="department"
                      id="department"
                      value={department}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Department</option>
                      <option value="CCS">CCS</option>
                      <option value="Commerce">Commerce</option>
                      {/* {Pag add value for department} */}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="program">Program</Label>
                    <Input
                      type="select"
                      name="program"
                      id="program"
                      value={program}
                      onChange={handleChange}
                      required
                    >
                      {department === "CCS" ? (
                        <>
                          <option value="IT">IT</option>
                          <option value="Computer Science">
                            Computer Science
                          </option>
                        </>
                      ) : department === "Commerce" ? (
                        <option value="Accountancy">Accountancy</option>
                      ) : (
                        <option value="">Select Program</option>
                      )}
                      {/* {if mag add kag department ari diri} */}
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="yearGraduated">Year Graduated</Label>
                    <Input
                      type="date"
                      name="yearGraduated"
                      id="yearGraduated"
                      value={isCreate ? yearGraduated : formattedYearGraduated}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <ModalFooter>
                <Button color="success" size="lg" type="submit">
                  {isCreate ? "Submit" : "Update"}
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default PersonalInfoModal;
