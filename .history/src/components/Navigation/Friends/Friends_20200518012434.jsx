import React from "react";
import "./Friends.css";

const Friends = (props) => {
  return props.friends.map((friend) => {
    return (
      <div className="friend">
        <img src={`${friend.friendAvatar}`} className="friendAva" alt=''></img>
        <p className="friendName">{friend.friendName}</p>
      </div>
    );
  });
};

export default Friends;
