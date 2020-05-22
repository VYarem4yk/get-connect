import React from "react";
import "./Users.css";

const Users = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <d></d>
        <div>
          <img src={user.userAvatar}></img>
      <button>{user.followed?'follow':'unfollow'}</button>
        </div>
          <div>{user.userFirstName}</div>
          <div>{user.userLastName}</div>
        </button>
      ))}
    </div>
  );
};
export default Users;