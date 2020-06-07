import "./Users.css";
import React from "react";
import userPhoto from "../../../images/userPhoto.png";

import { NavLink } from "react-router-dom";
import Preloader from "../../Preloader/Preloader";

let Users = (props) => {
  debugger;
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

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
        <Preloader />
      ) : (
        props.users.map((user) => (
          <div className="userWrapper">
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  className="userAvatar"
                ></img>
              </NavLink>

              <div>
                {user.followed ? (
                  <button
                    className="buttonFollower"
                    onClick={() => {
                      Axios.delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {
                          withCredentials: true ,
                          headers: 
                        }
                      ).then((response) => {
                        if (response.data.resultCode == 0) {
                          props.unFollow(user.id);
                        }
                      });
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
