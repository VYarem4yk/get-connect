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
      <Post message='/>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
