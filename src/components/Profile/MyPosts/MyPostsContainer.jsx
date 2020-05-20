import React from "react";
import { addPostActionCreator } from "../../../redux/profileReducer";
import { textPostChangeCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPostClick = () => {
          store.dispatch(addPostActionCreator());
        };

        let updadePostText = (text) => {
          let action = textPostChangeCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            updadePostText={updadePostText}
            addPost={addPostClick}
            curentPostText={state.profilePage.curentPostText}
            postData={state.profilePage.PostData}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
