import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <wrapper>
      <div className="avatar">
        <img src="https://lh3.googleusercontent.com/proxy/13jEXl0T3uIk_-YfB5sZQBSDRfp9KDttleLJwn8zIh0hPpDcqpLX6mx-pJBKhl9NBzuW5cO_CpZO5LigEKB84O5xFeox8XYFY6pH8cpuxW1m0XM8QYhjsjCNoWEjvBJuVptKQvg"></img>
    {props.}
      </div>
      <span>Like</span>
    </wrapper>
  );
};

export default Post;
