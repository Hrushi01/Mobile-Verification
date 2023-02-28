import React from "react";
import Webcam from "react-webcam";
import IconButton from "@mui/material/IconButton";

import { Box, Button, Modal, Typography } from "@mui/material";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture = (props) => {
  const { camon, setCamOn, setpicture, picture } = props;
  const webcamRef = React.useRef(null);

  return (
    <>
      <div className="items-center">
        <Modal
          data-testid="webcam-modal"
          open={camon}
          onClose={() => {
            setCamOn(false);
          }}
        >
          <Box className="  left-1/2 right-1/2  translate-x-1/2 translate-y-1/3 bg-orange-50 opacity-90 border-2 border-gray-600 w-1/2 p-5  ">
            <div>
              <div className="  left-2 top-2">
                <IconButton
                  color="error"
                  data-testid="x-button"
                  component="label"
                  onClick={() => {
                    setCamOn(false);
                  }}
                >
                  X
                </IconButton>
              </div>
              <div
                className="flex justify-center text-center"
                data-testid="texte"
              >
                <Typography variant="h5">
                  Please have a clear Background.
                </Typography>
              </div>
              <div className="  p-1 flex justify-center text-center">
                <div className="p-1 border-2 border-gray-600 ">
                  {picture ? (
                    <div className="">
                      <img
                        data-testid="img"
                        src={
                          picture
                            ? picture
                            : "https://via.placeholder.com/150.png?text=Logo"
                        }
                        alt="img"
                        width={450}
                      />
                    </div>
                  ) : (
                    <Webcam
                      data-testid="webcam"
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      width={450}
                      // onUserMedia={onuser}
                      videoConstraints={videoConstraints}
                    />
                  )}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5  mt-4  ">
                <Button
                  data-testid="capture-button"
                  variant="contained"
                  onClick={() => {
                    const imageSrc = webcamRef.current.getScreenshot();
                    setpicture(imageSrc);
                  }}
                >
                  Capture
                </Button>
                <Button
                  className="retake"
                  data-testid="retake-button"
                  variant="contained"
                  onClick={() => setpicture(null)}
                >
                  Retake
                </Button>
                <Button
                  data-testid="close-button"
                  variant="contained"
                  color="error"
                  onClick={() => {
                    setCamOn(false);
                  }}
                >
                  Close
                </Button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default WebcamCapture;
