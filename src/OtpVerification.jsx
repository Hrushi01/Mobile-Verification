import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"; // import { Button, TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase";
// import { auth } from "./firebase";

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [loding, setLoading] = useState(false);
  const [user, setuser] = useState();

  const oncaptchaverify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          },
        },
        auth
      );
    }
  };
  const onSignup = () => {
    setLoading(true);
    oncaptchaverify();

    const appVerifier = window.recaptchaVerifier;

    const formatphn = "+" + phoneNumber;

    signInWithPhoneNumber(auth, formatphn, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setVerificationId(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const onOTPVerify = () => {
    setLoading(true);
    window.confirmationResult
      .confirm(verificationCode)
      .then(async (res) => {
        console.log(res);
        setuser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleSendCode = async () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    try {
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        // This timeout is optional
        30000
      );
      setVerificationId(verificationId);
    } catch (err) {
      console.log(err);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await firebase.auth().signInWithCredential(credential);
      console.log("Successfully signed in");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <TextField
          id="phone-number"
          label="Enter your phone number"
          variant="outlined"
          fullWidth
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div id="recaptcha-container"></div>
      <PhoneInput
        country={"in"}
        value={phoneNumber}
        onChange={setPhoneNumber}
      />

      <div className="mb-6">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={onSignup}
        >
          Send verification code
        </Button>
      </div>

      {verificationId && (
        <>
          <div className="mb-6">
            <TextField
              id="verification-code"
              label="Enter verification code"
              variant="outlined"
              fullWidth
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </div>

          <div>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={onOTPVerify}
            >
              Verify code
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default PhoneAuth;
