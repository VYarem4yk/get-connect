import React from "react";

const Friends = (props) => {
  let { friendName, friendAvatar } = props.friends;
  return (<div>{friendName} </div>
  <div>{}</div>;
};

export default Friends;