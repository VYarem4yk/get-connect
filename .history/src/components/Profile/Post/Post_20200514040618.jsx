import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <wrapper>
      <div className="avatar">
        <img src="https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png"></img>
        {props.message}
      </div>
      <span>{`Like: ${props.likeCount}`}</span>
    </wrapper>
  );
};

export default Post;
