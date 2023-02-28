import React, { useState } from "react";
import WebcamCapture from "../webcamcapture";
import { MdDeleteForever } from "react-icons/md";

const FileInput = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [camon, setCamOn] = useState(false);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-36 h-36 relative">
        <img
          data-testid="setimg"
          src={
            selectedFile
              ? selectedFile
              : "https://via.placeholder.com/150.png?text=Logo"
          }
          alt="img"
          className="w-full h-full rounded-full shadow-md"
        />
        <div className="absolute bottom-0 right-0 rounded-full z-10 p-1 bg-white items-center justify-center flex"></div>
        {selectedFile ? (
          <div className="absolute top-0 right-0 rounded-full z-10 bg-transparent items-center justify-center flex">
            <div
              data-testid="del"
              className="rounded-full cursor-pointer text-2xl bg-white p-0.5"
              onClick={() => {
                setSelectedFile(null);
              }}
            >
              <MdDeleteForever color={"red"} />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <label
        htmlFor="file-input"
        className="block my-4 font-bold text-gray-700"
      >
        Select a file:
      </label>
      <input
        type="file"
        id="file-input"
        onChange={handleFileSelect}
        className={
          selectedFile
            ? "py-2 px-4 border-2 border-green-700 rounded-md mb-4"
            : "py-2 px-4 border border-gray-700 rounded-md mb-4"
        }
      />
      {selectedFile && <p className="text-gray-700">{selectedFile.name}</p>}

      <button
        type="button"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCamOn(!camon)}
      >
        {camon ? "Close Camera" : "Open Camera"}
      </button>
      <div>
        {camon ? (
          <div data-testid="web" className="flex">
            <WebcamCapture
              camon={camon}
              setCamOn={setCamOn}
              picture={selectedFile}
              setpicture={setSelectedFile}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FileInput;
