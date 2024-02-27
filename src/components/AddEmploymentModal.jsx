import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Row, Col, Form } from "reactstrap";

const AddEmploymentModal = ({ isOpen, toggle }) => {
    const [employmentDetails, setEmploymentDetails] = useState({
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
        alumniId:""
    });

    const [isLoading, setIsLoading] = useState(false);

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
            setIsLoading(true);

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
                toggle(); // close the modal after successful submission
            } else {
                console.error("Failed to submit form data");
            }
        } catch (error) {
            console.error("Error submitting form data:", error);
        } finally {
            setIsLoading(false);
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
                                    value={employmentDetails.companyName}
                                    onChange={handleChange}
                                    name="companyName" 
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="position">Position</Label>
                                <Input
                                    type="text"
                                    id="position"
                                    value={employmentDetails.position}
                                    onChange={handleChange}
                                    name="position" 
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
                                    value={employmentDetails.startDate}
                                    onChange={handleChange}
                                    name="startDate" 
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="endDate">End Date</Label>
                                <Input
                                    type="date"
                                    id="endDate"
                                    value={employmentDetails.endDate}
                                    onChange={handleChange}
                                    name="endDate" 
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button color="success" type="submit" disabled={isLoading}>
                        {isLoading ? "Submitting..." : "Submit"}
                    </Button>
                </Form>
            </ModalBody>
            <ModalFooter></ModalFooter>
        </Modal>
    );
};

export default AddEmploymentModal;
