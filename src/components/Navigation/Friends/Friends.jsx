import React from "react";
import "./Friends.css";
import StoreContext from "../../../StoreContext";

const Friends = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let friends = store.getState().friends.friends;
        return friends.map((friend) => {
          return (
            <div className="friend">
              <img
                src={`${friend.friendAvatar}`}
                className="friendAva"
                alt="friendAva"
              ></img>
              <p className="friendName">{friend.friendName}</p>
            </div>
          );
        });
      }}
    </StoreContext.Consumer>
  );
};

export default Friends;
