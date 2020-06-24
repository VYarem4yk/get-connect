import React from "react";
import "./ProfileInfo.css";
import Preloader from "../../Preloader/Preloader";
const ProfileInfo = (props) => {
  return (
    <div className="profileWrapper">
      {/* <div className="profileBG">
        <img
          src="https://www.itl.cat/pngfile/big/205-2054551_new-york-city-desktop-wallpapers-4k-ultra-hd.jpg"
          alt="profileBG"
        ></img>
      </div> */}
      <div className="profileContent">
        <div className="profileAvatar">
          <img
            src="https://sun9-43.userapi.com/c855616/v855616104/20836a/0uNmcrwkYrY.jpg?ava=1"
            alt="avatar"
          ></img>
        </div>
        <div className="profileInformation">
          <h2>Vladislav Yaremchuk</h2>
          <h3>Belarus, Minsk</h3>
          <div className="statusProfile">
            <status>status</status>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
