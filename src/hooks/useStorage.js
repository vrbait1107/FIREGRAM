import { projectStorage, peojectFirestore } from "../firebase/config";
import { useState, useEffect } from "react";

const useStorage = (file) => {
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    // References
    const storageRef = projectStorage.ref(file.name);

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentege = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentege);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const urlValue = await storageRef.getDownloadURL();
        setUrl(urlValue);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
