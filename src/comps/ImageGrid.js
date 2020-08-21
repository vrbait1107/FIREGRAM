import React from "react";
import useFirestore from "../hooks/useFirestore";
import { Col } from "react-bootstrap";
import { motion } from "framer-motion";

const ImageGrid = (props) => {
  const { docs } = useFirestore("images");

  const handleModal = (image) => {
    props.setShow(true);
    props.setSelectedImage(image);
  };

  return (
    <React.Fragment>
      {docs &&
        docs.map((doc) => (
          <Col md={4} key={doc.id} onClick={() => handleModal(doc.urlValue)}>
            <motion.img
              src={doc.urlValue}
              alt="images"
              className="img-fluid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </Col>
        ))}
    </React.Fragment>
  );
};

export default ImageGrid;
