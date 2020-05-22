import React from "react";
import "./Users.css";

const Users = (props) => {
  return (
    <div>
        {props.users.map((user) => return
        (<div>{user.userFirstName}</div>)
          
        ))}
    </div>
  );
};
export default Users;
