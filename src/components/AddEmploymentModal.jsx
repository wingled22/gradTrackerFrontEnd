import { useState } from "react";
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
  Form,
} from "reactstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddEmploymentModal = ({
  isOpen,
  toggle,
  selectedAlumniID,
  getEmploymentHistory,
  alumniDetail,
}) => {
  const [employmentDetails, setEmploymentDetails] = useState({
    companyName: "",
    position: "",
    startDate: "",
    endDate: null,
    alumniId: "",
  });

  const { firstName, lastName } = alumniDetail;

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
      const formData = {
        alumniId: selectedAlumniID,
        companyName: employmentDetails.companyName,
        position: employmentDetails.position,
        startDate: employmentDetails.startDate,
        endDate: employmentDetails.endDate,
      };

      console.log(formData);

      const response = await fetch(
        "http://localhost:5134/api/EmploymentHistory",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setEmploymentDetails({
          companyName: "",
          position: "",
          startDate: "",
          endDate: "",
          alumniId: "",
        });

        console.log("Form data submitted successfully");
        toast.success("Form submitted successfully!"); // Display success notification
        toggle(); // close the modal after successful submission
        getEmploymentHistory();
      } else {
        console.error("Failed to submit form data");
        toast.error("Failed to submit form data"); // Display error notification
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      toast.error("Error submitting form data"); // Display error notification
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader
        style={{ background: "#FF862D" }}
        toggle={toggle}
        className="EmpAddHeader text-center"
      >
        <p
          className="header-empAdd fw-bold fs-1 text-white"
          style={{ marginLeft: "250px" }}
        >
          Add Employment{" "}
        </p>
        <p className="header-name fw-bold fs-4 text-white">
          {firstName + " " + lastName}
        </p>
      </ModalHeader>
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
                  required
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
                  required
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
                  required
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
    </Modal>
  );
};

export default AddEmploymentModal;
