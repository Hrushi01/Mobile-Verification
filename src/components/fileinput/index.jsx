import React, { useState } from "react";
import WebcamCapture from "../WebCamCapture";
import { MdDeleteForever } from "react-icons/md";

const FileInput = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [camon, setCamOn] = useState(false);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center">
      {!selectedFile ? (
        <div className="w-full max-w-md">
          <label
            htmlFor="file-input"
            className="block text-lg font-bold text-gray-700"
          >
            Select a file:
          </label>
          <input
            type="file"
            id="file-input"
            onChange={handleFileSelect}
            className={
              "py-2 px-4 rounded-md shadow-sm  block w-full sm:text-sm border-gray-300"
            }
          />
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={() => setCamOn(!camon)}
            >
              {camon ? "Close Camera" : "Open Camera"}
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center w-full max-w-md">
            <div className="relative rounded-full w-36 h-36">
              <img
                data-testid="setimg"
                src={
                  selectedFile
                    ? selectedFile
                    : "https://via.placeholder.com/150.png?text=Picture"
                }
                alt="img"
                className="w-full h-full rounded-full shadow-md"
              />
              {selectedFile && (
                <div className="absolute top-0 right-0 p-1 bg-white rounded-full">
                  <div
                    data-testid="del"
                    className="rounded-full cursor-pointer text-2xl bg-white p-0.5"
                    onClick={() => setSelectedFile(null)}
                  >
                    <MdDeleteForever color={"red"} />
                  </div>
                </div>
              )}
            </div>
            <div className="mt-4">{selectedFile.name}</div>
          </div>
        </>
      )}

      {camon && (
        <div className="mt-4">
          <WebcamCapture
            camon={camon}
            setCamOn={setCamOn}
            picture={selectedFile}
            setpicture={setSelectedFile}
          />
        </div>
      )}
    </div>
  );
};

export default FileInput;
