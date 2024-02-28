import React from "react";
import { Button } from "reactstrap";
import PersonalInfoModal from "./PersonalInfoModal";
import { useState } from "react";

const Bttons = ({ getAlumni, deleteAlumni }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  return (
    <>
      <div>
        {modal ? (
          <PersonalInfoModal
            getAlumni={getAlumni}
            toggled={modal}
            untoggle={toggleModal}
            isCreate={true}
          />
        ) : (
          ""
        )}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr" }}>
        <Button color="primary" onClick={toggleModal}>
          Create
        </Button>
        <Button
          color="danger"
          onClick={() => {
            deleteAlumni();
          }}
        >
          Delete
        </Button>
      </div>
    </>
  );
};

export default Bttons;
