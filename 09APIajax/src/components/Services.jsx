import React, { useEffect, useState } from "react";
import axios from "../Utils/Axios";

function Services() {
  const [first, setfirst] = useState("this is normal data");
  const [second, setsecond] = useState("this is very large data");

  const getusers = () => {
    const api = "/users";
    axios
      .get(api)
      .then((users) => {
        console.log(users);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getusers();
  }, []);

  useEffect(() => {
    getusers();
    console.log("Services component mounted");

    return () => {
      console.log("Services component unmounted");
    };
  }, [second]);
  return (
    <div>
      <h1>{first}</h1>
      <button
        onClick={() => setfirst("Normal data has been changed")}
        className="px-3 py-1 bg-red-100 rounded mb-10 p-2"
      >
        Change Normal Data
      </button>

      <h1>{second}</h1>
      <button
        onClick={() => setsecond("Large data has been changed")}
        className="px-3 py-1 bg-blue-100 rounded p-2"
      >
        Change Large Data
      </button>
    </div>
  );
}

export default Services;
