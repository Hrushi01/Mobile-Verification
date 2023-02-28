import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerForm = () => {
  const initialValues = {
    dob: "",
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
              React-DatePicker
            </label>
            <DatePicker
              id="dob"
              name="dob"
              selected={formikProps.values.dob}
              onChange={(date) => formikProps.setFieldValue("dob", date)}
              dateFormat="MM/dd/yyyy"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
};

export default DatePickerForm;
