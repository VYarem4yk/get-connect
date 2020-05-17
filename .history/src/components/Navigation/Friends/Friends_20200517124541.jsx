import React from "react";

const Friends = (props) => {
  let { friendName, friendAvatar } = props.friends;
  return (<div>
             <div>{friendName} </div>
                <div>{friendAvatar}</div>
    </div>
};

export default Friends;
