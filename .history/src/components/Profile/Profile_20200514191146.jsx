import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
    <main className="app-main">
      <div className="profileWrapper">
        <div className="profileBG">
          <img
            src="https://thumbs.dreamstime.com/b/%D1%88%D0%B8%D1%80%D0%BE%D0%BA%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%BD%D0%B0%D1%8F-%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%B0%D0%BD-%D1%88%D0%B0%D1%84%D1%82%D0%B0-%D0%BF%D1%83%D1%81%D1%82%D1%8B%D0%BD%D0%B8-82115128.jpg"
            alt="mainProfileBG"
          ></img>
        </div>
        <div className="profileContent"></div>
        
      </div>

      <MyPosts />
    </main>
  );
};

export default Profile;
