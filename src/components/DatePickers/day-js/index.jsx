import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import dayjs from "dayjs";
import "dayjs/locale/en"; // or any other locale you want to use
import "dayjs/locale/es"; // import additional locales as needed
import "react-date-picker/dist/DatePicker.css";
import DatePicker from "react-date-picker";
import Button from "@mui/material/Button";

// set the locale to use with Day.js
dayjs.locale("en");

const Day = () => {
  const initialValues = {
    dateOfBirth: dayjs(),
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.dateOfBirth) {
      errors.dateOfBirth = "Required";
    }

    return errors;
  };

  return (
    <div className="border p-4 my-2 rounded-lg flex flex-col ">
      {/* <h2 className="text-2xl font-bold mb-4">Day.js Date of Birth</h2> */}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {(formikProps) => (
          <Form className="w-full max-w-lg">
            <div className="mb-4">
              <label
                htmlFor="dateOfBirth"
                className="block font-bold text-lg mb-2"
              >
                3. Day Js
              </label>
              <DatePicker
                name="dateOfBirth"
                value={formikProps.values.dateOfBirth.toDate()}
                onChange={(date) =>
                  formikProps.setFieldValue("dateOfBirth", dayjs(date))
                }
                locale={dayjs.locale()}
                format="MM/dd/yyyy"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              />
              <ErrorMessage
                name="dateOfBirth"
                component="div"
                className="text-red-500 mt-2"
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Day;