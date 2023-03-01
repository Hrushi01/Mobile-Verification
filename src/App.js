import FileInput from "./components/Fileinput";
import Otp from "./components/Otp";
import DatePickerForm from "./components/DatePickers/react-datepicker";
// import DateOfBirthInput from "./components/React-Dates";
import DayPicke from "./components/React-Day-Picker";
import Datesmore from "./components/DatePickers/Antd date";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto p-8 rounded-lg shadow-lg overflow-scroll h-4/5 bg-white overflow-x-hidden">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Welcome to my app
        </h1>
        <FileInput />
        <Otp />
        <DatePickerForm />
        {/* <DateOfBirthInput /> */}
        <Datesmore />
        <DayPicke />
      </div>
    </div>
  );
}

export default App;
