import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addPostClick = () => {
    props.store.addPost();
  };

  let textChange = () => {
    let text = newPostElement.current.value;
    props.store.textPostChange(text);
  };

  return (
    <div className="myPosts">
      <div className="makePost">
        <textarea
          className="textareaPost"
          ref={newPostElement}
          onChange={textChange}
          value={props.store.state.profilePage.curentPostText}
        ></textarea>
        <button className="addPostBTN" onClick={addPostClick}>
          Add Post
        </button>
      </div>
      {props.store.state.profilePage.postData.map(({ postText, likes }) => {
        return <Post store={props.store} />;
      })}
    </div>
  );
};

export default MyPosts;
