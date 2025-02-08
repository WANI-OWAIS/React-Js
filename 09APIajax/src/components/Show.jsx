import React, { useEffect } from "react";
import axios from "../Utils/Axios";
import { useState } from "react";

function Show() {
  const [products, setproducts] = useState([]);

  const getproduct = () => {
    const api = "/products";
    axios
      .get(api)
      .then((products) => {
        // console.log(products);
        setproducts(products.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <>
      {/* <div className="pt-5 pl-5">
        <button onClick={getproduct} className="px-5 py-2 bg-red-300 rounded mb-2">
          Call Product Api
        </button>
      </div> */}

      <ul>
        {products.length > 0 ? (
          products.map((p) => (
            <li key={p.id} className="mt-2 rounded p-5 bg-red-200 ml-5 mb-2">
              {p.title}
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </>
  );
}

export default Show;
