import React from "react";
import { Button } from "reactstrap";
import PersonalInfoModal from "./PersonalInfoModal";

const Bttons = ({ getAlumni, deleteAlumni}) => {

  return (
    <>
      <PersonalInfoModal getAlumni={getAlumni} />
      <div style={{}}>
        <Button color="danger" onClick={() => {deleteAlumni()}}>Delete</Button>
      </div>
    </>
  );
};

export default Bttons;
