import React from "react";
import "./Friends.css";

const Friends = (props) => {
  return props.friends.map((friend) => {
    return (
      <div>
        <p className='frie'>{friend.friendName}</p>
        <img src={`${friend.friendAvatar}`} className="friendAva"></img>
      </div>
    );
  });
};

export default Friends;
