import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import DateOfBirthPicker from "./DateOfBirthPicker";

function DateOfBirthForm() {
  const initialValues = {
    dob: null,
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.dob) {
      errors.dob = "Required";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {(formikProps) => (
        <Form>
          <div className="mb-4">
            <label htmlFor="dob" className="block font-bold text-lg mb-2">
              Material-UI Date Picker
            </label>
            <DateOfBirthPicker
              name="dob"
              label="Date of Birth"
              value={formikProps.values.dob}
              onChange={(date) => formikProps.setFieldValue("dob", date)}
            />
            <ErrorMessage
              name="dob"
              component="div"
              className="text-red-500 mt-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default DateOfBirthForm;
