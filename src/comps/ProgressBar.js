import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = (props) => {
  const { progress, url } = useStorage(props.file);
  console.log(progress);
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default ProgressBar;
