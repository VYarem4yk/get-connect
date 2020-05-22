import React from "react";
import "./Users.css";

const Users = (props) => {
  return <div>{props.users.map((user) => user.userFirstName)}</div>;
};
export default Users;
