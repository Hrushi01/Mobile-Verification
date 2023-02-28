import { useState } from "react";

import FileInput from "./components/fileinput";
import Otp from "./components/otp";
import DateOfBirthForm from "./components/DatePickers/material-UI picker/Material-UI";
import DatePickerForm from "./components/DatePickers/react-datepicker/React-DatePicker";
import Day from "./components/DatePickers/Dayjs/Day";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 ">
      <div className="max-w-2xl mx-auto p-8  rounded-lg shadow-lg overflow-scroll h-4/5  bg-white overflow-x-hidden ">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Welcome to my app
        </h1>
        <FileInput />
        <Otp user={user} setUser={setUser} />
        <DateOfBirthForm />
        <DatePickerForm />
        <Day />
      </div>
    </div>
  );
}

export default App;
