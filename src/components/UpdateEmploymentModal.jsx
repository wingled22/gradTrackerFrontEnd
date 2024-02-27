import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
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

const UpdateEmployeeModal = ({ toggled, untoggle }) => {
  const [modalEmpUpdate, setModalEmpUpdate] = useState(toggled);

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
            <form>
              <div className="thin-Rounded">
                <Row>
                  <div className="rec-company-name text-white">
                    <p className="update-company-title fs-6 ">Company Name</p>
                    {/* <p className="update-company-sub fs-2">Accenture</p> */}
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      className="form-control update-company-sub fs-2"
                    />
                  </div>
                  <div className="rec-position text-white">
                    <p className="update-position-title fs-6 ">Position</p>
                    <p className="update-position-sub fs-2">
                      Sr. Web Developer
                    </p>
                  </div>
                </Row>
                <Row>
                  <div className="rec-start text-white">
                    <p className="update-start-title fs-6 ">Start</p>
                    <p className="update-start-sub fs-2">10/1/2019</p>
                  </div>
                  <div className="rec-end text-white">
                    <p className="update-end-title fs-6 ">End</p>
                    <p className="update-end-sub fs-2">10/1/2020</p>
                  </div>
                </Row>
              </div>
              <Button className="UpdateEmpHistory">Edit Employment</Button>
            </form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default UpdateEmployeeModal;
