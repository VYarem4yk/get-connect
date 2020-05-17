import React from "react";

const Friends = (props) => {
  return props.friends.map((friend) => {return(
    <div>{friend.friendName}
    <img
    </div>)
  });
};

export default Friends;
