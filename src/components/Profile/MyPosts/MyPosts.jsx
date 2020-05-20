import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";
import { addPostActionCreator } from "../../../redux/profileReducer";
import { textPostChangeCreator } from "../../../redux/profileReducer";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addPostClick = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let textChange = () => {
    let text = newPostElement.current.value;

    props.store.dispatch(textPostChangeCreator(text));
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
