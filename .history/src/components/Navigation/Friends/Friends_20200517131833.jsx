import React from "react";
import "./Friends.css";

const Friends = (props) => {
  return props.friends.map((friend) => {
    return (
      <div>
        <img src={`${friend.friendAvatar}`} className="friendAva"></img>
        <p>{friend.fr</p>
      </div>
    );
  });
};

export default Friends;