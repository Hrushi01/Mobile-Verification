import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const ReactDatetime = () => {
  const minDate = new Date("01/01/2001");
  const maxDate = new Date("12/31/2009");
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {
    if (date.isSameOrAfter(minDate) && date.isSameOrBefore(maxDate)) {
      setSelectedDate(date.format("MM/DD/YYYY"));
    } else {
      alert("Please select a date between 2001 and 2009.");
    }
  };

  return (
    <div className="border p-4 my-2 rounded-lg flex flex-col ">
      <div className="mb-4">
        <label htmlFor="dateOfBirth" className="block font-bold text-lg mb-2">
          -React-datetime in range 2001-2009
        </label>
        <Datetime
          inputProps={{ id: "dob" }}
          timeFormat={false}
          placeholderText="MM/dd/yyyy"
          dateFormat="MM/DD/YYYY"
          onChange={handleDateChange}
          value={selectedDate}
          closeOnSelect={true}
          isValidDate={(current) =>
            current.isSameOrBefore(maxDate) && current.isSameOrAfter(minDate)
          }
          className="border border-gray-400 rounded p-2"
        />
      </div>
    </div>
  );
};

export default ReactDatetime;
