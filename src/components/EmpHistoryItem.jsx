import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';

const EmpHistoryItem = ({ empDetail, employmentDetail, toggleEmpUpdate, getEmploymentHistory }) => {
    const {
        id,
        companyName,
        position,
        startDate,
        endDate,
        alumniId,
    } = empDetail;

   // console.log("alumni ni",alumniId);

    const deleteEmploymentHistory = async (empID) => {
        try {
            const response = await fetch(`http://localhost:5134/api/EmploymentHistory/${empID}`,
                {
                    method: "DELETE",
                }
            );

            getEmploymentHistory();
            notifySuccessDelete();
        } catch (error) {
            console.log(error);
        }
    }

    const notifySuccessDelete = () => toast.success("Successfully deleted");

    const showConfirmationDeleteEmployeeDetail = (empID) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //call the deletion
                deleteEmploymentHistory(empID);
            }
        });
    };

    return (
        <>
            <ul className="events">
                <li>
                    <div className="progress-circle "></div>
                    <span className="EmpJob fw-bold  fs-4">{position}</span>
                    <div className="h-line"></div>
                    <div className="year fw-bold  fs-4">{startDate + " - " + endDate}</div>

                    <div className="buttonAction">
                        <Button
                            color="secondary text-white"
                            
                            onClick={() => {
                                employmentDetail(empDetail);
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
                                showConfirmationDeleteEmployeeDetail(id);
                            }}
                        >
                            Delete
                        </Button>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default EmpHistoryItem;