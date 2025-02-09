import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/Context";

function User() {
    const { users } = useContext(UserContext);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">User List</h1>
            <div className="flex flex-col space-y-3">
                {users.map((u) => (
                    <Link 
                        key={u.id} 
                        to={`/user/${u.id}`} 
                        className="bg-red-100 p-3 rounded shadow hover:bg-red-200 transition duration-300 flex justify-between items-center"
                    >
                        <span className="font-medium text-lg">{u.name}</span>
                        <span className="text-gray-600">{u.city}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default User;
