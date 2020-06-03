import React from "react";
import "./Users.css";

const Users = (props) => {
  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
      props
    });
  }

  return (
    <div>
      {props.users.map((user) => (
        <div className="userWrapper">
          <div>
            <img src={user.userAvatar} className="userAvatar"></img>
            <div>
              {user.followed ? (
                <button
                  className="buttonFollower"
                  onClick={() => {
                    props.unFollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className="buttonFollower"
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className="userInfo">
            <div className="userName">
              {user.userFirstName} {user.userLastName}
            </div>
            <div className="userStatus">{user.status}</div>
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
