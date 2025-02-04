import React, { useState } from "react";

function App() {
  const [val, setVal] = useState({ name: "John", isBanned: false });
  return (
    <div className="p-6">
      <h1>Name: {val.name}</h1>
      <h2>Banned: {val.isBanned.toString()}</h2>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`px-3 py-1 rounded-full ${
          val.isBanned ? " bg-blue-400" : " bg-red-400"
        } text-white`}
      >
        Change
      </button>
    </div>
  );
}

export default App;
