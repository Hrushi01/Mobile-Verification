import React, { useState } from "react";
import { DatePicker } from "antd";
// import "antd/dist/antd.css";
// import moment from "moment";

function Datesmore() {
  const [dob, setDob] = useState(null);

  const handleDateChange = (date) => {
    setDob(date);
  };

  return (
    <div className="border p-4 my-2 rounded-lg flex flex-col ">
      <div className="mb-4">
        <label htmlFor="dateOfBirth" className="block font-bold text-lg mb-2">
          Antd Dates
        </label>
        <br />
        <DatePicker
          id="dob"
          value={dob}
          onChange={handleDateChange}
          format="MM/DD/YYYY"
          placeholder="MM/DD/YYYY"
          allowClear={false}
        />
      </div>
    </div>
  );
}
export default Datesmore;
