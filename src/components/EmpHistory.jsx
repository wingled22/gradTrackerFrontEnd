import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EmployeeDetailModal from "./EmployeeDetailModal";
import AddEmploymentModal from "./AddEmploymentModal";
import UpdateEmployeeModal from "./UpdateEmploymentModal";

import "../assets/css/EmpHistory.css";

const EmployeeHistory = ({ toggled, untoggle, selectedAlumniID }) => {
  const [alumniID, setAlumniID] = useState(selectedAlumniID);

  const [alumniDetail, setAlumniDetail] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
  });

  const [modal, setModal] = useState(toggled);
  const [addEmploymentModalOpen, setAddEmploymentModalOpen] = useState(false);

  const toggleAddEmploymentModal = () => setAddEmploymentModalOpen(!addEmploymentModalOpen);
  


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

  const getAlumnus = async () => 
  {
    try {

      console.log(selectedAlumniID);
      const response = await fetch("http://localhost:5134/api/Alumni/" + selectedAlumniID);
      const data = await response.json();

      setAlumniDetail(() => ({
        ...
        {
          firstName: data.firstName,
          middleName: data.middleName,
          lastName : data.lastName,
        },
      }));
    } catch (error) {
      //console.log(error);
    }
  }

  useEffect(() => {
    getAlumnus();
  }, [selectedAlumniID]);

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



      <UpdateEmployeeModal
        toggled={modalEmpUpdate}
        untoggle={toggleEmpUpdate}
      ></UpdateEmployeeModal>


      <AddEmploymentModal
        isOpen={addEmploymentModalOpen}
        toggle={toggleAddEmploymentModal}
        addEmployment={handleAddEmployment}

      />


      <Modal isOpen={toggled} toggle={untoggle} className="modalForm">
        <ModalHeader toggle={untoggle} className="EmpHeader text-center">
          <p className="header-empHistory fw-bold">Employment History</p>
          <p className="header-name fw-bold">({alumniDetail.firstName + " " + alumniDetail.lastName})</p>
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
                    color="secondary text-white"
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
            <Button color="primary" onClick={toggleAddEmploymentModal}>
              Add Employment
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EmployeeHistory;
