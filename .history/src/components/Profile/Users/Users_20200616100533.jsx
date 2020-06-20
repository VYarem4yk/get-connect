import "./Users.css";
import React from "react";
import userPhoto from "../../../images/userPhoto.png";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import Preloader from "../../Preloader/Preloader";
import ReactPaginate from "react-paginate";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pagesCount}
          marginPagesDisplayed={3}
          pageRangeDisplayed={props.pageSize}
          onPageChange={props.onPageChanged(1)}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"selectedPage"}
        />
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
                          withCredentials: true,

                          headers: {
                            "API-KEY": "33da53e4-fe0b-47ff-91cd-c7c0aee9ed04",
                          },
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
                      Axios.post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "33da53e4-fe0b-47ff-91cd-c7c0aee9ed04",
                          },
                        }
                      ).then((response) => {
                        if (response.data.resultCode == 0) {
                          props.follow(user.id);
                        }
                      });
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
