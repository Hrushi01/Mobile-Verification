import React, { useState, useEffect } from "react";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";

function DateOfBirthInput() {
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [focused, setFocused] = useState(false);

  const handleDateChange = (date) => {
    setDateOfBirth(date);
  };

  const handleFocusChange = ({ focused }) => {
    setFocused(focused);
  };

  useEffect(() => {
    // Do something when the component updates
    console.log("Component updated");
  });

  return (
    <div className="border p-4 my-2 rounded-lg flex flex-col ">
      <div className="mb-4">
        <label htmlFor="dateOfBirth" className="block font-bold text-lg mb-2">
          React-Dates
        </label>
        <SingleDatePicker
          date={dateOfBirth}
          onDateChange={handleDateChange}
          focused={focused}
          onFocusChange={handleFocusChange}
          id="dateOfBirth"
          numberOfMonths={1}
          isOutsideRange={(day) => day.isAfter(moment())}
          displayFormat="MM/DD/YYYY"
          placeholder="MM/DD/YYYY"
        />
      </div>
    </div>
  );
}

export default DateOfBirthInput;
