import React from "react";
import "./Friends.css";

const Friends = (props) => {
  return props.friends.map((friend) => {
    return (
      <div>
        {friend.friendName}
        <img src={`${friend.friendAvatar}`} className='frien'></img>
      </div>
    );
  });
};

export default Friends;
