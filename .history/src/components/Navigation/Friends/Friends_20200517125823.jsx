import React from "react";

const Friends = (props) => {
  return props.friends.map((friend) => {return
    <div>{friend.friendName}</div>;
  });
};

export default Friends;
