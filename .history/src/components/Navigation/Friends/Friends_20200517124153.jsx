import React from "react";

const Friends = (props) => {
    let {friends}
    return ( <div> {friends.map((friend)=>friend.FriendName}</div>)
};

export default Friends;
