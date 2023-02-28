import React from "react";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import { CgSpinner } from "react-icons/cg";
import PhoneInp from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function PhoneInput({ ph, setPh, onSignup, loading }) {
  return (
    <Formik initialValues={ph} onSubmit={onSignup}>
      {(props) => (
        <Form className="bg-white  rounded-lg  ">
          <div className="mb-6">
            <label
              htmlFor="pn"
              className="block font-bold text-xl text-center mb-2"
            >
              Verify your phone number
            </label>
            <PhoneInp
              country="in"
              value={ph}
              onChange={setPh}
              //   containerClass="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            fullWidth
            className="flex items-center justify-center"
          >
            {loading && <CgSpinner size={20} className="mr-2 animate-spin" />}
            Send verification code
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default PhoneInput;
