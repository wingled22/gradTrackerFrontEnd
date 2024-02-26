// Import necessary dependencies
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Row, Col, Form } from "reactstrap";

// Create the AddEmploymentModal component
const AddEmploymentModal = ({ isOpen, toggle, addEmployment }) => {

    const [employmentDetails, setEmploymentDetails] = useState({
        companyName: "",
        position: "",
        startDate: "",
        endDate: ""
    });

    const {
        companyName,
        position,
        startDate,
        endDate
      } = employmentDetails;

      const handleChange = (e) => {
        const { name, value } = e.target;
        setEmploymentDetails((currentCreds) => ({
          ...currentCreds,
          [name]: value,
        }));
      };
    const handleAddEmployment = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5134/api/EmploymentHistory", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(employmentDetails),
            });

            if (response.ok) {
                setEmploymentDetails({
                    companyName: "",
                    position: "",
                    startDate: "",
                    endDate: "",

                });

                console.log("Form data submitted successfully");
                alert("Form submitted successfully!");
                {isOpen}
            } else {
                console.error("Failed to submit form data");
            }
        } catch (error) {
            console.error("Error submitting form data:", error);
        }
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add Employment</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleAddEmployment}>
                    <hr className="separator" />
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="companyName">Company Name</Label>
                                <Input
                                    type="text"
                                    id="companyName"
                                    value={companyName}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="position">Position</Label>
                                <Input
                                    type="text"
                                    id="position"
                                    value={position}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="startDate">Start Date</Label>
                                <Input
                                    type="date"
                                    id="startDate"
                                    value={startDate}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="endDate">End Date</Label>
                                <Input
                                    type="date"
                                    id="endDate"
                                    value={endDate}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button color="success" type="submit">
                        Submit
                    </Button>
                </Form>

            </ModalBody>
            <ModalFooter>

            </ModalFooter>
        </Modal>
    );
};

export default AddEmploymentModal;
