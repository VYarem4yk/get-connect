import React from "react";
import "./Friends.css";

const Friends = (props) => {
  return props.friends.map((friend) => {
    return (
      <div>
        <p{friend.friendName}
        <img src={`${friend.friendAvatar}`} className='friendAva'></img>
      </div>
    );
  });
};

export default Friends;
