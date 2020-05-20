import React from "react";
import "./Friends.css";

const Friends = (props) => {
  debugger;
  return props.store.getState().friends.map((friend) => {
    return (
      <div className="friend">
        <img
          src={`${friend.friendAvatar}`}
          className="friendAva"
          alt="friendAva"
        ></img>
        <p className="friendName">{friend.friendName}</p>
      </div>
    );
  });
};

export default Friends;
