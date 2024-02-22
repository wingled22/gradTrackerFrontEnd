import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import './assets/css/PersonalInfoModal.css'; 

  const PersonalInfoModal = (prop) => {
  const [modal, setModal] = useState(false);
  const [department, setDepartment] = useState('');
  const [program, setProgram] = useState('');

  const toggle = () => setModal(!modal);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5134/api/Alumni', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(personalFormData)
      });

      if (response.ok) {
        
        console.log('Form data submitted successfully');
       
        setModal(false);
      } else {

        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

 
  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    setDepartment(selectedDepartment);
   
    if (selectedDepartment === 'Commerce') {
      setProgram('Accountancy');
    } else {
      setProgram('');
    }
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>Create</Button>
      <Modal size='lg' isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="header">Personal Information Form</ModalHeader>
        <ModalBody className='modal-body'>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input type="text" name="firstName" id="firstName" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="middleName">Middle Name</Label>
                  <Input type="text" name="middleName" id="middleName" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input type="text" name="lastName" id="lastName" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="birthDate">Birth Date</Label>
                  <Input type="date" name="birthDate" id="birthDate" />
                </FormGroup>
              </Col>
            </Row>
              <hr className="separator" />
              <h5 className="group-title">Address Information</h5>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="province">Province</Label>
                  <Input type="text" name="province" id="province" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="city">City/Municipality</Label>
                  <Input type="text" name="city" id="city" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="barangay">Barangay</Label>
                  <Input type="text" name="barangay" id="barangay" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="street">Street</Label>
                  <Input type="text" name="street" id="street" />
                </FormGroup>
              </Col>
            </Row>
            <hr className="separator" />
            <h5 className="group-title">Contact Information</h5>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="email">Email Address</Label>
                  <Input type="email" name="email" id="email" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="contactNumber">Contact Number</Label>
                  <Input type="text" name="contactNumber" id="contactNumber" />
                </FormGroup>
              </Col>
            </Row>
            <hr className="separator" />
            <h5 className="group-title">Department Information</h5>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="department">Department</Label>
                  <Input type="select" name="department" id="department" onChange={handleDepartmentChange}>
                    <option value="">Select Department</option>
                    <option value="CCS">CCS</option>
                    <option value="Commerce">Commerce</option>
                    {/* {Pag add value for department} */}
                  </Input>
                </FormGroup>
            
              
                <FormGroup>
                  <Label for="program">Program</Label>
                  <Input type="select" name="program" id="program" value={program} onChange={(e) => setProgram(e.target.value)}>
                    {department === 'CCS' ? (
                      <>
                        <option value="IT">IT</option>
                        <option value="Computer Science">Computer Science</option>
                      </>
                    ) : department === 'Commerce' ? (
                      <option value="Accountancy">Accountancy</option>
                    ) : (
                      <option value="">Select Program</option>
                    )}
                    {/* {if mag add kag department ari diri} */}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </form>
        </ModalBody>
        <ModalFooter>
            <Button onClick ={handleSubmit} color="success" type="submit">Submit</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PersonalInfoModal;
