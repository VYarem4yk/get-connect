import React, { Component } from "react";
import "./Users.css";
import Axios from "axios";
import userPhoto from "../../../images/userPhoto.png";

class Users extends Component {
  componentDidMount() {
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`
    ).then((response) => {
      let userWithPhoto = [];
      response.data.items.map((item) => {
        if (item.photos.small !== "null") {
          userWithPhoto.push(item);
          return userWithPhoto;
        }
      });
      this.props.setUsers(userWithPhoto);
      this.props.countTotalUsers(response.data.totalCount);
    });
  }
  onPageChanged = (page) => {
    this.props.setCurentPage(page);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
    ).then((response) => {
      this.props.setUsers(response.data.items);
      this.props.countTotalUsers(response.data.totalCount);
    });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((page) => {
            return (
              <span
                className={page === this.props.curentPage && "selectedPage"}
                onClick={(event) => {
                  this.onPageChanged(page);
                }}
              >
                {page} /
              </span>
            );
          })}
        </div>
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
