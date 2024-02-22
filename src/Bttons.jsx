import React from "react";
import { Button } from "reactstrap";
import PersonalInfoModal from "./PersonalInfoModal";

const Bttons = ({ getAlumni }) => {
  return (
    <>
      <PersonalInfoModal getAlumni={getAlumni} />
      <div style={{}}>
        <Button color="danger">Delete</Button>
      </div>
    </>
  );
};

export default Bttons;
