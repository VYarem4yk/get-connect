import React, { Component } from "react";
import "./Users.css";
import Axios from "axios";
import userPhoto from "../../../images/userPhoto.png";

class Users extends Component {
  constructor(props) {
    super(props);
    getUsers = () =>
      Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
        (response) => {
          debugger;
          this.props.setUsers(response.data.items);
        }
      );
  }
  render() {
    return (
      <div>
        <button onClick={getUsers}>Get Users</button>
        {this.props.users.map((user) => (
          <div className="userWrapper">
            <div>
              <img
                src={user.photos.small != null ? user.photos.small : userPhoto}
                className="userAvatar"
              ></img>
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
  }
}

export default Users;
