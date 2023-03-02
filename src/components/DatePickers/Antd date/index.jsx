import React, { useState } from "react";
import { DatePicker } from "antd";
// import "antd/dist/antd.css";
import moment from "moment";

const AntdDate = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date, dateString) => {
    // Check if selected date is between 2001 and 2005
    const selectedYear = new Date(dateString).getFullYear();
    if (selectedYear >= 2001 && selectedYear <= 2005) {
      setSelectedDate(dateString);
    } else {
      alert("Please select a date of birth between 2001 and 2005.");
    }
  };

  return (
    <div className="border p-4 my-2 rounded-lg flex flex-col ">
      <div className="mb-4">
        <label htmlFor="dateOfBirth" className="block font-bold text-lg mb-2">
          -Antd Dates in range 2001-2005
        </label>
        <DatePicker
          id="dob"
          onChange={handleDateChange}
          value={selectedDate ? moment(selectedDate) : null}
          format="MM/DD/YYYY"
        />
      </div>
    </div>
  );
};

export default AntdDate;
