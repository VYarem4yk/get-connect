import React, { Component } from "react";
import "./Users.css";
import Axios from "axios";
import userPhoto from "../../../images/userPhoto.png";

class Users extends Component {
  componentDidMount() {
    Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
      (response) => {
        debugger;
        this.props.setUsers(response.data.items);
      }
    );
  }
  createArrayOfPages = () => {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    let pagesArray = [];
    for (let i = 1; i <= pagesCount; i++) {
      pagesArray.push(i);
    }
    return pa
  };

  render() {
    return (
      <div>
        <div></div>
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
                      this.props.unFollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className="buttonFollower"
                    onClick={() => {
                      this.props.follow(user.id);
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
