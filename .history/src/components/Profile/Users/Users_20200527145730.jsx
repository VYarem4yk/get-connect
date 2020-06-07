import "./Users.css";

import userPhoto from "../../../images/userPhoto.png";

let Users = () => {
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
};

export default Users;