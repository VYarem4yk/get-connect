import React from "react";

const Friends = (props) => {
    let {friends}=props
  return (
      {friends.map((friend)=>friend.FriendName})}
  );
};
export default Friends;
