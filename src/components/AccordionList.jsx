import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/AccordionList.css";
import AlumnustItem from "./AlumnusItem";
import React, { useEffect, useState } from "react";

import {
  Button,
  Container,
  Accordion,
  AccordionItem,
  AccordionBody,
  AccordionHeader,
  Input,
  Card,
  CardBody,
  Collapse,
} from "reactstrap";

const AccordionList = ({ data, getAlumni, addBatchID, deleteBatchID }) => {
  // const [alumni, setAlumni] = useState([]);

  // const containerStyle = {
  //   width: "79%",
  //   height: "500px",
  //   backgroundColor: "#D9D9D9",
  //   maxHeight: "400px",

  //   borderRadius: "20px",
  //   overflow: "auto",
  // };

  // const accordionStyle = {
  //   borderRadius: "20px",
  //   marginBottom: "5px",
  // };

  // state for the hover of input
  const [hover, setHover] = useState(false);

  //This is for the opening and closing of the Accordion
  const [open, setOpen] = useState("0");
  const toggle = (id) => {
    if (open === id) {
      setOpen("0");
    } else if (hover) {
      setOpen("0");
    } else {
      setOpen(id);
    }
  };

  //FETCHING THE DATA OF THE ALUMNI
  useEffect(() => {
    getAlumni();
  }, [data.id]);

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "70vh",
        }}
      >
        <Container className="accordionContainer">
          <Accordion
            open={open}
            toggle={toggle}
            className="mt-4"
            // style={accordionStyle}
          >
            {data.length === 0 && "No Alumni Information"}

            {data.map((alumnus) => (
              <AlumnustItem
                key={alumnus.id}
                alumnus={alumnus}
                hover={hover}
                setHover={setHover}
                addBatchID={addBatchID}
                deleteBatchID={deleteBatchID}
                getAlumni={getAlumni}
              />
            ))}
          </Accordion>
        </Container>
      </div>
    </>
  );
};

export default AccordionList;
