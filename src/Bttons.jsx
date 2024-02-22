import React from "react";
import { Button } from "reactstrap";
import PersonalInfoModal from "./PersonalInfoModal";

const Bttons = () => {
  return (
    <>
      <PersonalInfoModal />
      <div style={{}}>
        <Button color="danger">Delete</Button>
      </div>
    </>
  );
};

export default Bttons;
