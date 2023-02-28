import React from "react";
import Button from "@mui/material/Button";
import { Formik, Form, Field } from "formik";
import { CgSpinner } from "react-icons/cg";

function OtpInput({ otp, setOtp, loading, onOTPVerify }) {
  return (
    <Formik initialValues={otp} onSubmit={onOTPVerify}>
      {(props) => (
        <Form className="mt-6">
          <label
            htmlFor="otp"
            className="block text-xl font-bold text-center mb-3"
          >
            Enter your OTP
          </label>
          <Field
            id="verification-code"
            name="otp"
            label="Enter verification code"
            variant="outlined"
            fullWidth
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mb-3 w-full"
          />
          <div className="flex justify-center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="text-white bg-indigo-500 hover:bg-indigo-600 py-2 px-4 rounded-md shadow-md transition-colors duration-300 ease-in-out"
            >
              {loading && <CgSpinner size={20} className="mr-2 animate-spin" />}
              Verify code
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default OtpInput;
