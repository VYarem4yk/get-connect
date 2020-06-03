import React from "react";
import "./Users.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        userFirstName: "Katarzyna",
        userLastName: "Danilezka",
        followed: true,
        status: "Wanna Sleeep!!!",
        location: { city: "Minsk", country: "Belarus" },
        userAvatar:
          "https://sun9-2.userapi.com/c854224/v854224678/89482/cg3Pty7zkLE.jpg?ava=1",
      },
      {
        id: 2,
        userFirstName: "Igor",
        userLastName: "Yaremchuk",
        followed: false,
        status: "Ama HACKER!!!",
        location: { city: "Minsk", country: "Belarus" },
        userAvatar:
          "https://sun9-62.userapi.com/c855324/v855324226/e948c/A8UZ7fwcG-U.jpg?ava=1",
      },
      {
        id: 3,
        userFirstName: "Lesha",
        userLastName: "Parukov",
        followed: true,
        status: "A-lex!!! || A-tlet!!!",
        location: { city: "Minsk", country: "Belarus" },
        userAvatar:
          "https://sun9-8.userapi.com/c857424/v857424375/2b90e/cy94o_L6YnI.jpg?ava=1",
      },
      {
        id: 4,
        userFirstName: "Sasha",
        userLastName: "Heino",
        followed: true,
        status: "To Cold for summer!!! B-r-r-r...",
        location: { city: "Minsk", country: "Belarus" },
        userAvatar:
          "https://sun9-22.userapi.com/c855732/v855732265/14f14b/vpHKUsR2rGk.jpg?ava=1",
      },
      {
        id: 5,
        userFirstName: "Artem",
        userLastName: "Kyzmich",
        followed: true,
        status: "FISHING IS GOOD!)",
        location: { city: "Minsk", country: "Belarus" },
        userAvatar:
          "https://sun9-67.userapi.com/c845321/v845321504/8c50b/rOnA4_Nz6O4.jpg?ava=1",
      },
      {
        id: 6,
        userFirstName: "Zhenya",
        userLastName: "Korsunov",
        followed: false,
        status: "Lineage2",
        location: { city: "Minsk", country: "Belarus" },
        userAvatar:
          "https://sun9-18.userapi.com/c836132/v836132471/47e58/PkltMDwUq9s.jpg?ava=1",
      },
    ]);
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
