import React, { useContext,useState } from "react";
import { TabContext } from "../Form/Form";
import './Tab2.css';

const Tab2 = () => {
  const { tab1Data, changeHandler, handleNextTab } = useContext(TabContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [validationError, setValidationError] = useState("");
  
  const convertToBase64 = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = error => {
        reject(error);
      };
    });
  };

  const imageHandler = async e => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      const syntheticEvent = { target: { name: "photo", value: base64 } };
      changeHandler(syntheticEvent);
    }
    if (file) {
      const fileSize = file.size;
      const allowedSize = 20 * 1024;
      if (fileSize > allowedSize) {
        setValidationError("File size exceeds the limit of 20kb");
      } else {
        setSelectedFile(file);
        setValidationError("");
      }
    }
  };

  return (
    <TabContext.Consumer>
      {values => (
        <div>
          <div>
            <label htmlFor="photos"></label>
            <input
              name="photo"
              type="file"
              accept=".jpeg, .png, .jpg"
              onChange={imageHandler}
              id="photos"
              max="500000"
            />
            {validationError && <p className="imageError">{validationError}</p>}
            {selectedFile && !validationError && (
              <img src={tab1Data.photo} alt="EncryptedPic" height={200} width={200} />
            )}
          </div>
          <button onClick={handleNextTab} className="button">
            Next
          </button>
        </div>
      )}
    </TabContext.Consumer>
  );
};

export default Tab2;
