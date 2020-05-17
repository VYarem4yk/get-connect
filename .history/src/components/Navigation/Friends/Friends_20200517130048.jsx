import React from "react";

const Friends = (props) => {
  return props.friends.map((friend) => {return(
    <div>{friend.friendName}
    <img src={`${friend.fri}`}></img>
    </div>)
  });
};

export default Friends;
