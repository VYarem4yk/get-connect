import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo fro
const Profile = () => {
  return (
    <main className="app-main">
      <ProfileInfo />
      <MyPosts />
    </main>
  );
};

export default Profile;
