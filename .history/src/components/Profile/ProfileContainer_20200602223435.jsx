import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {
  return (
    <main className="app-main">
      <Profile/>
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
