import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";
import { ADD_POST_ACTION_CREATOR } from "../../../redux/store";
import { TEXT_POST_CHANGE_ACTION_CREATOR } from "../../../redux/store";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addPostClick = () => {
    props.store.dispatch(ADD_POST_ACTION_CREATOR());
  };

  let textChange = () => {
    let text = newPostElement.current.value;

    props.store.dispatch(TEXT_POST_CHANGE_ACTION_CREATOR(text));
  };
  return (
    <div className="myPosts">
      <div className="makePost">
        <textarea
          className="textareaPost"
          ref={newPostElement}
          onChange={textChange}
          value={props.store.getState().profilePage.curentPostText}
        ></textarea>
        <button className="addPostBTN" onClick={addPostClick}>
          Add Post
        </button>
      </div>
      {props.store
        .getState()
        .profilePage.PostData.map(({ postText, likes }) => {
          return <Post message={postText} likeCount={likes} />;
        })}
    </div>
  );
};

export default MyPosts;
