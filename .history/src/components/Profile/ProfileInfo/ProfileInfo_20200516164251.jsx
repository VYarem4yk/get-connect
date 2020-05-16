import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";
const ProfileInfo = () => {
  return (
    <div className="profileWrapper">
      <div className="profileBG">
        <img src="https://www.itl.cat/pngfile/big/205-2054551_new-york-city-desktop-wallpapers-4k-ultra-hd.jpg"></img>
      </div>
      <div className="profileContent">
        <div className="profileAvatar">
          <img
            src="https://sun9-43.userapi.com/c855616/v855616104/20836a/0uNmcrwkYrY.jpg?ava=1"
            alt="avatar"
          ></img>
        </div>
        <div className="profileInformation">
          <h2>Владислав Яремчук</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
