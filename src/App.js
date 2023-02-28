import { useState } from "react";

import FileInput from "./FileInput";
import Otp from "./components/Otp";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Welcome to my app
        </h1>
        <FileInput />
        <Otp user={user} setUser={setUser} />
      </div>
    </div>
  );
}

export default App;
