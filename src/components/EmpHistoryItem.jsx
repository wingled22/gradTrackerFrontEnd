import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EmpHistoryItem = ({empDetail, toggleEmpDetail, toggleEmpUpdate}) => {

    const {
        id,
        companyName,
        position,
        startDate,
        endDate,
        alumniId,
      } = empDetail;

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
    </> 
    );
}
 
export default EmpHistoryItem;