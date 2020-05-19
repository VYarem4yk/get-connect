import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className="myPosts">
      My Posts
      <div className="makePost">
        <textarea className="textareaPost"></textarea>
        <button className="addPostBTN">Добавить пост</button>
      </div>
      {props.postData.map(({ postText, likes }) => {
        return <Post message={postText} likeCount={likes} />;
      })}
    </div>
  );
};

export default MyPosts;
