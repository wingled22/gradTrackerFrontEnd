import { Button, Input } from "reactstrap";
import React from "react";
import Bttons from "./Bttons";

const Searchc = () => {
  return (
    <div className="container" style={{ width: "1200px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "10fr 1fr 1fr",
          marginTop: 150,
          marginBottom: 50,
        }}
        className=""
      >
        <Input
          type="text"
          placeholder="Search Alumni"
          style={{ width: "95%" }}
        />

        <Bttons />
      </div>
    </div>
  );
};

export default Searchc;
