import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className='m'>
      My Posts
      <div>
        <textarea className="textareaPost"></textarea>
        <button>Добавить пост</button>
      </div>
      <Post message="Hello how are you?" likeCount="20" />
      <Post message="This is my first post!" likeCount="15" />
    </div>
  );
};

export default MyPosts;
