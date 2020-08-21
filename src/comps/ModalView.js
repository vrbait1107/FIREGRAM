import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const ModalView = (props) => {
  let show = props.show;
  let setShow = props.setShow;
  let selectedImage = props.selectedImage;

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <img src={selectedImage} className="img-fluid" alt="image" />
    </Modal>
  );
};

export default ModalView;
