import React from "react";
import "./Users.css";

const Users = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <div>
          <div>
            <img src={user.userAvatar}></img>
            <button>{user.followed ? "unfollow" : "follow"}</button>
          </div>
          <div>
            <div>
              <div>{user.userFirstName}</div>
              <div>{user.userLastName}</div>
            </div>
            <div>{user.location.city</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
