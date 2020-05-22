import React from "react";
import "./Users.css";

const Users = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <div>
            <div>
                <img src={user.userAvatar}></img>
                <button>{user.followed?'follow':'unfollow'}</button>
            </div>

            
        </div>
        
          <div>{user.userFirstName}</div>
          <div>{user.userLastName}</div>
       
      ))}
    </div>
  );
};
export default Users;
