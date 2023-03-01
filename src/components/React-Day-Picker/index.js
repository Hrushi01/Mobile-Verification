import React, { useState } from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const DayPicke = () => {
  const [selected, setSelected] = useState();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <div className="border p-4 my-2 rounded-lg flex flex-col ">
      <div className="mb-4">
        <label htmlFor="dateOfBirth" className="block font-bold text-lg mb-2">
          React-Day-Picker
        </label>
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={footer}
        />
      </div>
    </div>
  );
};
export default DayPicke;
