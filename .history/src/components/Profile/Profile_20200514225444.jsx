import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
    <main className="app-main">
      <div className="profileWrapper">
        <div className="profileBG">
          <img
            src="https://lh3.googleusercontent.com/proxy/Vtw8K2YLT6pVeB6zi9x6U0eIbb8XkJJe2jbpup7H8sLmqad1-8p5AT1VIPlxfAcGff_4sqUylCyN7ymGhFeAmX_SGR0N_AJfzkGOl51hdsiXEx0NuTd-itlrQDBVbx5H2w"
            alt="mainProfileBG"
          ></img>
        </div>
        <div className="profileContent">
          <div className="profileAvatar">
            <img
              src="https://sun9-43.userapi.com/c855616/v855616104/20836a/0uNmcrwkYrY.jpg?ava=1"
              alt="avatar"
            ></img>
          </div>
          <div className="profileInformation">information</div>
        </div>
      </div>

      <MyPosts />
    </main>
  );
};

export default Profile;
