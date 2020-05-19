import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPostClick = () => {
    props.addPost(newPostElement.current.value);
    
  };
  return (
    <div className="myPosts">
      <div className="makePost">
        <textarea className="textareaPost" ref={newPostElement}></textarea>
        <button className="addPostBTN" onClick={addPostClick}>
          Add Post
        </button>
      </div>
      {props.postData.map(({ postText, likes }) => {
        return <Post message={postText} likeCount={likes} />;
      })}
    </div>
  );
};

export default MyPosts;
