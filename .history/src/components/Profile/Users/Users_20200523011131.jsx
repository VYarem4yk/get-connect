import React from "react";
import "./Users.css";

const Users = (props) => {
  return (
  <div></div>
  <div>{props.users.map((user) => user.userFirstName)}</div>);
};
export default Users;
