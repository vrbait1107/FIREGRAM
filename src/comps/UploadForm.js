import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ProgressBar from "./ProgressBar";

const UploadForm = (props) => {
  const [file, setFile] = useState(null);

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected) {
      setFile(selected);
    }
  };

  return (
    <Form>
      <input
        type="file"
        name="upload"
        id="upload"
        accept=".jpg, .jpeg, .png"
        onChange={changeHandler}
      />

      <div className="mt-3">
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </Form>
  );
};

export default UploadForm;
