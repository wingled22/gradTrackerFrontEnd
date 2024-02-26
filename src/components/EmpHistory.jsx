import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EmployeeDetailModal from "./EmployeeDetailModal";
import UpdateEmployeeModal from "./UpdateEmploymentModal";

import "../assets/css/EmpHistory.css";

const EmployeeHistory = ({ toggled, untoggle }) => {
  const [modal, setModal] = useState(toggled);

  // for modal employee history
  const [modalEmpDetail, setModalEmpDetail] = useState(false);

  const toggleEmpDetail = () => setModalEmpDetail(!modalEmpDetail);

  // for modal update employee history
    const [modalEmpUpdate, setModalEmpUpdate] = useState(false);

    const toggleEmpUpdate = () => setModalEmpUpdate(!modalEmpUpdate);

 


  return (
    <div>
      <EmployeeDetailModal
        toggled={modalEmpDetail}
        untoggle={toggleEmpDetail}
      ></EmployeeDetailModal>


      <UpdateEmployeeModal
        toggled={modalEmpUpdate}
        untoggle={toggleEmpUpdate}
      ></UpdateEmployeeModal>


      <Modal isOpen={toggled} toggled={untoggle} className="modalForm">
        <ModalHeader toggle={untoggle} className="EmpHeader text-center">
          <p className="header-empHistory fw-bold">Employment History</p>
          <p className="header-name fw-bold">(Juan Dela Cruz)</p>
        </ModalHeader>

        <ModalBody>
          
            <ul className="events">
              <li>
                <div className="progress-circle "></div>
                <span className="EmpJob fw-bold  fs-4">IT Specialist</span>
                <div className="h-line"></div>
                <div className="year fw-bold  fs-4">2023-present</div>

                <div className="buttonAction">
                  <Button
                    color="info text-white"
                    onClick={() => {
                      toggleEmpDetail();
                    }}
                  >
                    Details
                  </Button>
                  <Button
                    color="success"
                    onClick={() => {
                     toggleEmpUpdate();
                    }}
                  >
                    Update
                  </Button>
                  
                  <Button
                    color="danger text-white"
                    onClick={() => {
                      toggleEmpDetail();
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </li>
            </ul>
          
          

          <div className="btnAddEmpHistory">
            <Button color="primary">Add Employment</Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EmployeeHistory;
