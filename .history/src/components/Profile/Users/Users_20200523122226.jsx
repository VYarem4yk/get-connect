import React from "react";
import "./Users.css";
import Axios from "axios";
import userPhoto from "../../../images/userPhoto.png";
const Users = (props) => {
  if (props.users.length === 0) {
    Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
      (response) => {
        debugger;
        props.setUsers(response.data.items);
      }
    );
  }

  return (
    <div>
      {props.users.map((user) => (
        <div className="userWrapper">
          <div>
            <img src={user.photos.small!=null? user.photos.small ?} className="userAvatar"></img>
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
            <div className="userName">{user.name}</div>
            <div className="userStatus">{user.status}</div>
            <div className="userLocation">
              {"user.location.city"}, {"user.location.country"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
