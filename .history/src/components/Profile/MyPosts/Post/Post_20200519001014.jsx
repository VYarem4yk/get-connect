import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <wrapper>
      <div className="avatar">
        <img
          src="https://sun9-43.userapi.com/c855616/v855616104/20836a/0uNmcrwkYrY.jpg?ava=1"
          alt="avatar"
        ></img>
        {props.store.smessage}
      </div>
      <span>{`Like: ${props.likeCount}`}</span>
    </wrapper>
  );
};

export default Post;
