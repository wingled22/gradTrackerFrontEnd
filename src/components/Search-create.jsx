import { Input } from "reactstrap";
import Bttons from "./Bttons";
import React, { useEffect, useState } from "react";

const Searchc = ({ getAlumni, getSearchValue }) => {

  const [searchText, setSearchText] = useState('');

  const passSearchValue = (e) => {
    setSearchText(e);
    getSearchValue(e);
  };

  return (
    <div className="container" style={{ width: "79%" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "20fr 1fr 1fr",
          marginTop: 120,
          marginBottom: 25,
        }}
      >
        <Input
          type="text"
          placeholder="Search Alumni"
          style={{ width: "70%" }}
          value={searchText}
          onChange={(e) => {
            passSearchValue(e.target.value);
          }}
        />

        <Bttons getAlumni={getAlumni} />
      </div>
    </div>
  );
};

export default Searchc;
