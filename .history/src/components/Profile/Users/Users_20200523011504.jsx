import React from "react";
import "./Users.css";

const Users = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <div>
          <img src={u}></img>
          <div>{user.userFirstName}</div>
          <div>{user.userLastName}</div>
        </div>
      ))}
    </div>
  );
};
export default Users;