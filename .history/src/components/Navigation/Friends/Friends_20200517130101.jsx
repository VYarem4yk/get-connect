import React from "react";

const Friends = (props) => {
  return props.friends.map((friend) => {return(
    <div>{friend.friendName}
    <img src={`${friend.friendA}`}></img>
    </div>)
  });
};

export default Friends;
