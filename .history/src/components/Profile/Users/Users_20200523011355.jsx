import React from "react";
import "./Users.css";

const Users = (props) => {
  return (
    <div>
        {props.users.map((user) => (
          <div></div>
          
        ))}

    </div>
  );
};
export default Users;
