import React from "react";
import "./Friends.css";

const Friends = (props) => {
  return props.friends.map((friend) => {
    return (
      <div>
        <img src={`${friend.friendAvatar}`} className="friendAva"></img>
        <p className="friendName">{friend.friendName}</p>
      </div>
    );
  });
};

export default Friends;
