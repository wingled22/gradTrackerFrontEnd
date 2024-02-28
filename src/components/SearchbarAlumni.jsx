import { Input } from "reactstrap";
import AlumniButtons from "./AlumniButtons.jsx";
import React, { useEffect, useState } from "react";

const SearchbarAlumni = ({ getAlumni, getSearchValue, deleteAlumni }) => {
  const [searchText, setSearchText] = useState("");
  const passSearchValue = (e) => {
    setSearchText(e);
    getSearchValue(e);
  };

  return (
    <div className="container" style={{ width: "79%" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "10fr 1fr 1fr",
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

        <AlumniButtons getAlumni={getAlumni} deleteAlumni={deleteAlumni} />
      </div>
    </div>
  );
};

export default SearchbarAlumni;
