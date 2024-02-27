import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";
import "../assets/css/EmployeeUpdateModal.css";

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

const UpdateEmployementModal = ({
  toggled,
  untoggle,
  empDetail,
  getEmploymentHistory,
}) => {
  const [modalEmpUpdate, setModalEmpUpdate] = useState(toggled);
  const [employmentCredentials, setEmploymentCredentials] = useState(empDetail);
  const { id, alumniId, companyName, position, startDate, endDate } =
    employmentCredentials;

  console.log(employmentCredentials);

  const handleCredentials = (e) => {
    const { name, value } = e.target;
    setEmploymentCredentials((currentCreds) => ({
      ...currentCreds,
      [name]:
        name === "startDate"
          ? formatDate(value)
          : name === "endDate"
          ? formatDate(value)
          : value,
    }));
  };

  const onUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5134/api/EmploymentHistory/" + id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(employmentCredentials),
        }
      );

      if (response.ok) {
        toast.success("Updated an alumni successfully");
        // getAlumni();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Error submitting form data:" + error);
    } finally {
      resetForm();
      untoggle();
      getEmploymentHistory();
    }
  };

  const resetForm = () => {
    setEmploymentCredentials((prevCreds) => ({
      ...prevCreds,
      companyName,
      position,
      startDate,
      endDate,
    }));
  };

  return (
    <div>
      <div className="modal-content" id="updateEmpHistory-content">
        <Modal
          isOpen={toggled}
          toggled={untoggle}
          className="EmpUpdatemodalForm"
        >
          <ModalHeader
            toggle={untoggle}
            className="EmpUpdateHeader text-center"
          >
            <p className="header-empUpdate fw-bold">Update Employment</p>
            <p className="header-name-update fw-bold">(Juan Dela Cruz)</p>
          </ModalHeader>

          <ModalBody>
            <form onSubmit={onUpdate}>
              <div className="thin-Rounded">
                <Row>
                  <div className="rec-company-name text-white">
                    <p className="update-company-title fs-6 ">Company Name</p>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      value={companyName}
                      onChange={handleCredentials}
                      className="form-control update-company-sub fs-4"
                    />
                  </div>
                  <div className="rec-position text-white">
                    <p className="update-position-title fs-6 ">Position</p>
                    <input
                      type="text"
                      name="position"
                      id="position"
                      value={position}
                      onChange={handleCredentials}
                      className="form-control update-company-sub fs-4"
                    />
                  </div>
                </Row>
                <Row>
                  <div className="rec-start text-white">
                    <p className="update-start-title fs-6 ">Start</p>
                    <input
                      type="date"
                      name="startDate"
                      id="startDate"
                      value={formatDate(startDate)}
                      onChange={handleCredentials}
                      className="form-control update-company-sub fs-4"
                    />
                  </div>
                  <div className="rec-end text-white">
                    <p className="update-end-title fs-6 ">End</p>
                    <input
                      type="date"
                      name="endDate"
                      id="endDate"
                      value={formatDate(endDate)}
                      onChange={handleCredentials}
                      className="form-control update-company-sub fs-4"
                    />
                  </div>
                </Row>
              </div>
              <Button className="UpdateEmpHistory">Update</Button>
            </form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default UpdateEmployementModal;
