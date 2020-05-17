import React from "react";

const Friends = (props) => {
  return (
      <div>{props.map(friend)}</div>
  );
};
export default Friends;
