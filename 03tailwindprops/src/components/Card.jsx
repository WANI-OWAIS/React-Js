import React from "react";

function Card({image,pname,para})
 {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-4 mb-4">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={image}
        
      />
      <h2 className="text-lg font-semibold mt-3">{pname}</h2>
      <p className="text-gray-600 text-sm mt-1">{para}
      </p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Shop Now
      </button>
    </div>
  );
 }

export default Card;
