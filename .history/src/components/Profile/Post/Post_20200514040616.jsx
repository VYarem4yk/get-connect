import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <wrapper>
      <div className="avatar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW3uz8Xp-NUzc4ncWMaXdSgntyHvF8iRhEZ7qKuB_C4Bru7iuS&usqp=CAUhttps://semantica.in/wp-content/uploads/2018/08/av-427845-1.png"></img>
        {props.message}
      </div>
      <span>{`Like: ${props.likeCount}`}</span>
    </wrapper>
  );
};

export default Post;
