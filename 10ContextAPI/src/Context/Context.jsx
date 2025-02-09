import { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
  const [users, setusers] = useState([
    {
      id: 1,
      name: "John Doe",
      city: "New York",
    },
    {
      id: 2,
      name: "Jane Doe",
      city: "Chicago",
    },
    {
      id: 3,
      name: "John Smith",
      city: "Mysore",
    },
  ]);

    return (
        <UserContext.Provider value={{ users, setusers }}>
        {props.children}
        </UserContext.Provider>
    );
}

export default Context;