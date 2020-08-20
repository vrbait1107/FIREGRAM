import React from "react";
import useFirestore from "../hooks/useFirestore";
import { Col } from "react-bootstrap";

const ImageGrid = () => {
  const { docs } = useFirestore("images");

  console.log(docs);

  return (
    <React.Fragment>
      {docs &&
        docs.map((doc) => (
          <Col md={4}>
            <img src={doc.urlValue} alt="images" className="img-fluid" />
          </Col>
        ))}
    </React.Fragment>
  );
};

export default ImageGrid;
