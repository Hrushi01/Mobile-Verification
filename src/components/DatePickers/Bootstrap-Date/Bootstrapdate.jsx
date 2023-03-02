import React from "react";
import { Formik, Form, Field } from "formik";
import { Row, Col } from "react-bootstrap";

function DateOfBirthInput() {
  const validateDateOfBirth = (value) => {
    const enteredDate = new Date(value);
    const minDate = new Date("2001-01-01");
    const maxDate = new Date("2005-12-31");

    if (enteredDate < minDate || enteredDate > maxDate) {
      return "Date of birth must be between 2001 and 2005";
    }
  };

  return (
    <div className="border p-4 my-2 rounded-lg flex flex-col ">
      <Formik
        initialValues={{ dateOfBirth: "" }}
        onSubmit={(values) => {
          console.log(values.dateOfBirth);
        }}
      >
        {(formik) => (
          <Form>
            <div as={Row} controlId="dob">
              <label column sm="3" className="block font-bold text-lg mb-2">
                Bootstrap- Date of Birth
              </label>
              <Col sm="9">
                <Field
                  type="date"
                  name="dateOfBirth"
                  validate={validateDateOfBirth}
                  className="border border-gray-400 px-3 py-2 rounded-md w-full text-gray-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
                {formik.errors.dateOfBirth && formik.touched.dateOfBirth && (
                  <div className="text-red-500">
                    {formik.errors.dateOfBirth}
                  </div>
                )}
              </Col>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-3"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default DateOfBirthInput;
