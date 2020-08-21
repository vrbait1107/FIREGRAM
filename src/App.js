import React from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import ModalView from "./comps/ModalView";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <Container className="mt-3">
        <Row>
          <ImageGrid setShow={setShow} setSelectedImage={setSelectedImage} />
        </Row>
        <ModalView
          show={show}
          setShow={setShow}
          selectedImage={selectedImage}
        />
      </Container>
    </div>
  );
}

export default App;
