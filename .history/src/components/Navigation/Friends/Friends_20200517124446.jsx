import React from "react";

const Friends = (props) => {
  let { friendName, friendAvatar } = props.friends;
  return (<div>{friendName} </div>
  <div>{friendAvatar}</div>;
};

export default Friends;