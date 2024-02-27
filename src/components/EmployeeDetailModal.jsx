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
import "../assets/css/EmployeeDetailModal.css";

const EmployeeDetailModal = ({
  toggled,
  untoggle,
  employmentInformation,
  alumniDetail,
}) => {
  const [modalEmpDetail, setModalEmpDetail] = useState(toggled);

  const { id, companyName, position, startDate, endDate, alumniId } =
    employmentInformation;

  const { firstName, middleName, lastName } = alumniDetail;

  return (
    <div>
      <Modal isOpen={toggled} toggled={untoggle} className="EmpDetailmodalForm">
        <ModalHeader toggle={untoggle} className="EmpDetailHeader text-center">
          <p className="header-empDetail fw-bold fs-1">Employment Detail</p>
          <p className="header-name fw-bold fs-4">
            {firstName + " " + lastName}
          </p>
        </ModalHeader>

        <ModalBody>
          <div className="radius-rectangle text-white ">
            <Col className="colCompany d-flex align-items-center">
              <p className="company fw-bold">Company:</p>
              <span className="span-company">{companyName}</span>
            </Col>
            <Col className="colPosition d-flex align-items-center">
              <p className="position fw-bold">Position: </p>
              <span className="span-position">{position}</span>
            </Col>
            <Col className="col-start-Date d-flex align-items-center">
              <p className="start-Date fw-bold">Start Date: </p>
              <span className="span-start-Date">{startDate}</span>
            </Col>
            <Col className="col-end-Date d-flex align-items-center">
              <p className="end-Date fw-bold">Start Date: </p>
              <span className="span-end-Date">{endDate}</span>
            </Col>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EmployeeDetailModal;
