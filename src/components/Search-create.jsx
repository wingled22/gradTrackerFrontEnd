import { Input } from "reactstrap";
import React from "react";
import Bttons from "./Bttons";

const Searchc = ({ getAlumni }) => {
  return (
    <div className="container" style={{ width: "80%" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "20fr 1fr 1fr",
          marginTop: 120,
          marginBottom: 25,
          position: "relative",
        }}
        className=""
      >
        <Input
          type="text"
          placeholder="Search Alumni"
          style={{ width: "70%" }}
        />

        <Bttons getAlumni={getAlumni} />
      </div>
    </div>
  );
};

export default Searchc;
