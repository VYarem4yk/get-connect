import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <main className="app-main">
      <ProfileInfo />
      <MyPosts postData={props.PostData} addPost={props.addPost} />
    </main>
  );
};

export default Profile;
