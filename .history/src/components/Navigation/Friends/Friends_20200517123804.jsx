import React from "react";

const Friends = (props) => {
    let {friends}=props
  return (
      {friends.map(friend=>{return friend.FriendName})}
  );
};
export default Friends;
