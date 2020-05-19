import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

let newPostElement = React.createRef();



const MyPosts = (props) => {
  return (
    <div className="myPosts">
      <div className="makePost">
        <textarea className="textareaPost" ref={newPostElement}></textarea>
        <button className="addPostBTN" onClick={this.addPostClick}>Add Post</button>
      </div>
      {props.postData.map(({ postText, likes }) => {
        return <Post message={postText} likeCount={likes} />;
      })}
    </div>
  );
};

export default MyPosts;
