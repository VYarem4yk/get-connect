import React from "react";
import "./Users.css";

const Users = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <div className="userWrapper">
          <div>
            <img src={user.userAvatar}></img>
            <button>{user.followed ? "unfollow" : "follow"}</button>
          </div>
          <div>
            <div className="userName">
              <div>{user.userFirstName}</div>
              <div>{user.userLastName}</div>
            </div>
            <div className=''></div>
            <div className="userLocation">
              {user.location.city}, {user.location.country}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
