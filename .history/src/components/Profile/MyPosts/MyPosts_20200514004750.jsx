import React from "react";
import "./MyPosts.css";
import Post from "../Post/Post";

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea className="textareaPost"></textarea>
        <button>Добавить пост</button>
      </div>
      <Post message="Hello how are you?" />
      <Post message="This is my first message!" />
    </div>
  );
};

export default MyPosts;
