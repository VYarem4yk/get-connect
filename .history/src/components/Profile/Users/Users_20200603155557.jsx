import "./Users.css";
import React from "react";
import userPhoto from "../../../images/userPhoto.png";
import preloader from "../../../images/Preloader.gif";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let pagination={}

  return (
    <div>
      <div>
        {pages.map((page, index) => {
          return (
            <span
              key={index}
              className={page === props.curentPage && "selectedPage"}
              onClick={(event) => {
                props.onPageChanged(page);
              }}
            >
              {page}.
            </span>
          );
        })}
      </div>
      {props.isLoading ? (
        <img src={preloader}></img>
      ) : (
        props.users.map((user) => (
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
        ))
      )}
    </div>
  );
};

export default Users;
