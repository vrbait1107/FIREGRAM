import React from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <Container className="mt-3">
        <Row>
          <ImageGrid />
        </Row>
      </Container>
    </div>
  );
}

export default App;
