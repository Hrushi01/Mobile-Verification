import FileInput from "./components/Fileinput";
import Otp from "./components/Otp";
import DatePickerForm from "./components/DatePickers/react-datepicker";
import ReactDatetime from "./components/DatePickers/React-Datetime";
import AntdDate from "./components/DatePickers/Antd date";
import BootstrapDate from "./components/DatePickers/Bootstrap-Date/Bootstrapdate";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto p-8 rounded-lg shadow-lg overflow-scroll h-4/5 bg-white overflow-x-hidden">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Welcome to my app
        </h1>
        <FileInput />
        <Otp />
        <BootstrapDate />
        <ReactDatetime />
        <AntdDate />
        <DatePickerForm />
      </div>
    </div>
  );
}

export default App;
