import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {
  if (props.isAuthorised == false) return <Redirect to={"/login"} />;

  return (
    <main className="app-main">
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
