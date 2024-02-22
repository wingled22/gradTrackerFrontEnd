import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../assets/css/EmployeeDetailModal.css";


const EmployeeDetailModal = ({ toggled, untoggle }) => {
  const [modalEmpDetail, setModalEmpDetail] = useState(toggled);

  return (
    <div>
      <Modal isOpen={toggled} toggled={untoggle} className="EmpDetailmodalForm">
        <ModalHeader toggle={untoggle} className="EmpDetailHeader text-center">
          <p className="header-empDetail fw-bold">Employment Detail</p>
          <p className="header-name fw-bold">(Juan Dela Cruz)</p>
        </ModalHeader>

        <ModalBody>
          {
            <h1>MJ</h1>


          }
          

          
          <div className="btnAddEmpDetail" >
          <Button color="primary" >Add Employment</Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EmployeeDetailModal;
