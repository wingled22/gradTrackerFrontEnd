import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EmployeeDetailModal from "./EmployeeDetailModal";
import AddEmploymentModal from "./AddEmploymentModal";
import UpdateEmployementModal from "./UpdateEmploymentModal";
import EmpHistoryItem from "./EmpHistoryItem";

import "../assets/css/EmpHistory.css";

const EmploymentHistory = ({ toggled, untoggle, selectedAlumniID }) => {
  const [alumniID, setAlumniID] = useState(selectedAlumniID);
  const [employmentHistoryDetails, setEmploymentHistoryDetails] = useState([]);
  const [employmentDetail, setEmploymentDetail] = useState({});
  const [selectedEmpId, setSelectedEmpId] = useState(null);
  const SetEmpDetail = (id) => {
    setSelectedEmpId(id);
    setEmploymentDetail(
      employmentHistoryDetails.find((item) =>
        item.id === selectedEmpId ? { ...item } : item
      )
    );
  };

  console.log(selectedEmpId);
  const [alumniDetail, setAlumniDetail] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
  });

  const [employmentInformation, setEmploymentInformation] = useState([]);

  const [modal, setModal] = useState(toggled);
  const [addEmploymentModalOpen, setAddEmploymentModalOpen] = useState(false);

  const toggleAddEmploymentModal = () =>
    setAddEmploymentModalOpen(!addEmploymentModalOpen);

  // for modal employee history
  const [modalEmpDetail, setModalEmpDetail] = useState(false);

  const toggleEmpDetail = () => setModalEmpDetail(!modalEmpDetail);

  // for modal update employee history
  const [modalEmpUpdate, setModalEmpUpdate] = useState(false);

  const toggleEmpUpdate = () => setModalEmpUpdate(!modalEmpUpdate);

  const handleAddEmployment = (employmentDetails) => {
    // Handle the addition of employment details
    // You can store the details in state or perform any necessary actions
    console.log("Added employment:", employmentDetails);
  };

  const getAlumnus = async () => {
    try {
      console.log(selectedAlumniID);
      const response = await fetch(
        "http://localhost:5134/api/Alumni/" + selectedAlumniID
      );
      const data = await response.json();

      setAlumniDetail(() => ({
        ...{
          firstName: data.firstName,
          middleName: data.middleName,
          lastName: data.lastName,
        },
      }));
    } catch (error) {
      //console.log(error);
    }
  };

  const getEmploymentHistory = async () => {
    try {
      const response = await fetch(
        "http://localhost:5134/api/EmploymentHistory/" + selectedAlumniID
      );
      const data = await response.json();

      setEmploymentHistoryDetails(data);
    } catch (error) {}
  };

  const _employmentDetail = (e) => {
    console.log(e);
    setEmploymentInformation(e);
    toggleEmpDetail();
  };

  useEffect(() => {
    getAlumnus();
    getEmploymentHistory();
  }, [selectedAlumniID]);

  return (
    <>
      {modalEmpDetail ? (
        <EmployeeDetailModal
          toggled={modalEmpDetail}
          untoggle={toggleEmpDetail}
          employmentInformation={employmentInformation}
          alumniDetail={alumniDetail}
        />
      ) : (
        ""
      )}

      {modalEmpUpdate ? (
        <UpdateEmployementModal
          toggled={modalEmpUpdate}
          untoggle={toggleEmpUpdate}
          empDetail={employmentDetail}
          getEmploymentHistory={getEmploymentHistory}
          alumniDetail={alumniDetail}
        />
      ) : (
        ""
      )}

      {addEmploymentModalOpen ? (
        <AddEmploymentModal
          isOpen={addEmploymentModalOpen}
          toggle={toggleAddEmploymentModal}
          addEmployment={handleAddEmployment}
          empDetails={employmentHistoryDetails}
          selectedAlumniID={selectedAlumniID}
          getEmploymentHistory={getEmploymentHistory}
        />
      ) : (
        ""
      )}

      <Modal isOpen={toggled} toggle={untoggle} className="modalForm">
        <ModalHeader toggle={untoggle} className="EmpHeader text-center">
          <p className="header-empHistory fw-bold">Employment History</p>
          <p className="header-name fw-bold">
            ({alumniDetail.firstName + " " + alumniDetail.lastName})
          </p>
        </ModalHeader>

        <ModalBody>
          {employmentHistoryDetails.length === 0 &&
            "No Employment History Information"}
          {employmentHistoryDetails.map((empDetail) => (
            <EmpHistoryItem
              key={empDetail.id}
              empDetail={empDetail}
              toggleEmpDetail={toggleEmpDetail}
              toggleEmpUpdate={toggleEmpUpdate}
              _employmentDetail={_employmentDetail}
              setSelectedEmpId={SetEmpDetail}
              getEmploymentHistory={getEmploymentHistory}
            />
          ))}

          <div className="btnAddEmpHistory">
            <Button
              style={{ marginLeft: "130px" }}
              color="primary"
              onClick={toggleAddEmploymentModal}
            >
              Add Employment
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default EmploymentHistory;
