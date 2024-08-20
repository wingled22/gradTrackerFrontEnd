import { Input, FormGroup, Label } from "reactstrap";
import AlumniButtons from "./AlumniButtons.jsx";
import React, { useEffect, useState } from "react";

const SearchbarAlumni = ({
  getAlumni,
  getSearchValue,
  getFilterValue,
  deleteAlumni,
}) => {
  const [searchText, setSearchText] = useState("");
  const [department, setDepartment] = useState("");
  const passSearchValue = (e) => {
    setSearchText(e);
    getSearchValue(e);
  };

  const handleSelectChange = (e) => {
    setDepartment(e.target.value);
    getFilterValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="container" style={{ width: "79%" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "5fr 3fr 1fr 2fr",
          marginTop: 120,
          marginBottom: 25,
        }}
      >
        {/* search filter */}
        <Input
          type="text"
          placeholder="Search Alumni"
          style={{ width: "70%" }}
          value={searchText}
          onChange={(e) => {
            passSearchValue(e.target.value);
          }}
        />

        {/* filter by date */}
        <FormGroup
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "auto",
          }}
        >
          <Label
            for="exampleSelect"
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "#f8f8f8",
              // textAlign: "center",
            }}
            className="my-auto"
          >
            Filter by department
          </Label>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            value={department}
            onChange={handleSelectChange}
            style={{ width: "70%" }}
          >
            <option value="">Department</option>
            <option value="CCS">CCS</option>
            <option value="Commerce">Commerce</option>
          </Input>
        </FormGroup>
        <AlumniButtons getAlumni={getAlumni} deleteAlumni={deleteAlumni} />
      </div>
    </div>
  );
};

export default SearchbarAlumni;
