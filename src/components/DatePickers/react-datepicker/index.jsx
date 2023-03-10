import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputMask from "react-input-mask";

const Example = () => {
  const minDate = new Date("01/01/2001");
  const maxDate = new Date("12/31/2005");
  const [selectedDate, setSelectedDate] = useState(null);
  const [values, setValues] = useState({
    dob: "",
  });

  const handleDateChange = (date) => {
    // Check if selected date is between 2001 and 2005
    if (date >= minDate && date <= maxDate) {
      setSelectedDate(date);
    } else {
      alert("Please select a date between 2001 and 2005.");
    }
  };

  const handleSubmit = (values, actions) => {
    setTimeout(() => {
      console.log(selectedDate); // Do something with the date of birth
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="border p-4 my-2 rounded-lg flex flex-col ">
      <div>
        <Formik initialValues={{ dob: "" }} onSubmit={handleSubmit}>
          {(props) => (
            <Form className="mt-6">
              <label
                htmlFor="dob"
                className="block text-xl font-bold text-center mb-3"
              >
                -React-datepicker in range 2001-2005
              </label>
              <DatePicker
                id="dob"
                placeholderText="MM/dd/yyyy"
                name="dob"
                dateFormat="MM/dd/yyyy"
                selected={selectedDate}
                onChange={handleDateChange}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                minDate={minDate}
                maxDate={maxDate}
                customInput={
                  <InputMask
                    style={{ width: "100%" }}
                    mask="99/99/9999"
                    placeholder="Enter DOB"
                  />
                }
                className="border border-gray-400 rounded p-2 m-2"
              />

              <DatePicker
                placeholderText="dd/mm/yyyy"
                dateFormat="dd/MM/yyyy"
                selected={values.dob}
                onChange={(date) => setValues({ ...values, dob: date })}
                className="border border-gray-400 rounded p-2 m-2"
                customInput={
                  <InputMask
                    style={{ width: "100%" }}
                    mask="99/99/9999"
                    placeholder="Enter DOB"
                  />
                }
                minDate={new Date("01/01/1920")}
                maxDate={new Date("12/31/2004")}
                showYearDropdown
              />
              {props.errors.dob && props.touched.dob ? (
                <div className="text-red-500">{props.errors.dob}</div>
              ) : null}
              <div className="flex justify-center mt-6">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={props.isSubmitting}
                >
                  Console dob
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Example;
