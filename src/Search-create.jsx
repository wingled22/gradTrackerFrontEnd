import { Button, Input } from "reactstrap";
import React from "react";
import Bttons from "./Bttons";

const Searchc = ({ getAlumni }) => {
  return (
    <div className="container" style={{ width: "1200px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "10fr 1fr 1fr",
          marginTop: 150,
          marginBottom: 70,
        }}
        className=""
      >
        <Input
          type="text"
          placeholder="Search Alumni"
          style={{ width: "95%" }}
        />

        <Bttons getAlumni={getAlumni} />
      </div>
    </div>
  );
};

export default Searchc;
