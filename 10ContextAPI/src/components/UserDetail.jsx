import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../Context/Context";

function UserDetail() {
  const { id } = useParams(); // Get user ID from URL
  const { users } = useContext(UserContext); // Get users from context

  const user = users.find((u) => u.id === parseInt(id)); // Find user by ID

  if (!user) {
    return <h1 className="text-red-500 text-2xl text-center mt-10">User Not Found!</h1>; // Handle invalid user ID
  }

  return (
    <div className="p-5 border border-gray-300 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
      <p className="text-lg text-gray-600">City: {user.city}</p>
    </div>
  );
}

export default UserDetail;
