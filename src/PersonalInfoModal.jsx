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
import "./assets/css/PersonalInfoModal.css";

const PersonalInfoModal = (props) => {
  const [modal, setModal] = useState(false);

  const [alumniCredentials, setAlumniCredentials] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    province: "",
    municaplity: "",
    barangay: "",
    street: "",
    email: "",
    contactNumber: "",
    department: "",
    program: "",
    yearGraduated: "",
    birthDate: "",
  });

  // destructure the alumni creds
  const {
    firstName,
    lastName,
    middleName,
    province,
    municaplity,
    barangay,
    street,
    email,
    contactNumber,
    department,
    program,
    yearGraduated,
    birthDate,
  } = alumniCredentials;

  // monitor changes in the alumni credentials
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumniCredentials((currentCreds) => ({
      ...currentCreds,
      [name]: value,
    }));
  };

  const toggle = () => setModal(!modal);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    setAlumniCredentials((currentCreds) => ({
      ...currentCreds,
      department: value,
    }));

    if (selectedDepartment === "Commerce") {
      setAlumniCredentials((currentCreds) => ({
        ...currentCreds,
        department: value,
      }));
    } else {
      setAlumniCredentials((currentCreds) => ({
        ...currentCreds,
        program: value,
      }));
    }
  };

  console.log(alumniCredentials);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Create
      </Button>
      <Modal size="lg" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="personal-info-header">
          Personal Information Form
        </ModalHeader>
        <ModalBody className="modal-body">
          <form onSubmit={handleSubmit}>
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
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              {/* <Col>
                <FormGroup>
                  <Label for="birthPlace">Birth Place</Label>
                  <Input type="text" name="birthPlace" id="birthPlace" />
                </FormGroup>
              </Col> */}
              <Col>
                <FormGroup>
                  <Label for="birthDate">Birth Date</Label>
                  <Input
                    type="date"
                    name="birthDate"
                    id="birthDate"
                    value={birthDate}
                    onChange={handleChange}
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
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="municaplity">City/Municipality</Label>
                  <Input
                    type="municaplity"
                    name="municaplity"
                    id="municaplity"
                    value={municaplity}
                    onChange={handleChange}
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
                    value={yearGraduated}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" type="submit">
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PersonalInfoModal;
