import React from "react";
import "./Users.css";

const Users = (props) => {
  return (
  <div>
    <div>{props.users.map((user) => <div></div>user.userFirstName)}</div>

  
  </div>
  );
};
export default Users;
