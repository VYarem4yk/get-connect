import React from "react";

const Friends = (props) => {
  return props.friends.map((friend) => {return(
    <div>{friend.friendName}
    <img></img>
    </div>)
  });
};

export default Friends;
