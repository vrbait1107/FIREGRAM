import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = (props) => {
  const { progress, url } = useStorage(props.file);

  useEffect(() => {
    if (url) {
      props.setFile(null);
    }
  }, [url]);

  return (
    <div className="progress">
      <div
        className="progress-bar bg-success"
        role="progressbar"
        aria-valuenow={progress}
        style={{ width: progress + "%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
