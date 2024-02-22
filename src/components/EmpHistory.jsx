import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EmployeeDetailModal from "./EmployeeDetailModal";

import "../assets/css/EmpHistory.css";

const EmployeeHistory = ({ toggled, untoggle }) => {
  const [modal, setModal] = useState(toggled);

  // for modal employee history
  const [modalEmpDetail, setModalEmpDetail] = useState(false);
  const toggleEmpDetail = () => setModalEmpDetail(!modalEmpDetail);

  return (
    <div>
      <EmployeeDetailModal
        toggled={modalEmpDetail}
        untoggle={toggleEmpDetail}
      ></EmployeeDetailModal>

      <Modal isOpen={toggled} toggled={untoggle} className="modalForm">
        <ModalHeader toggle={untoggle} className="EmpHeader text-center">
          <p className="header-empHistory fw-bold">Employment History</p>
          <p className="header-name fw-bold">(Juan Dela Cruz)</p>
        </ModalHeader>

        <ModalBody>
          {
            <ul class="events">
              <li>
                <div className="progress-circle"></div>
                <span>IT Specialist</span>
                <div className="h-line"></div>
                <div className="year">2023-present</div>

                <div className="buttonAction">
                  <Button
                    color="info text-white"
                    onClick={() => {
                      toggleEmpDetail();
                    }}
                  >
                    Details
                  </Button>
                  <Button color="success">Update</Button>
                  <Button color="danger">Delete</Button>
                </div>
              </li>

            </ul>
          }

          <div className="btnAddEmpHistory">
            <Button color="primary">Add Employment</Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EmployeeHistory;
