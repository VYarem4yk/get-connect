import React, { Component } from "react";
import "./Profile.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile, setProfile } from "../../redux/profileReducer";
import { withRouter, Redirect } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    setProfile(userId);
  }

  render() {
    if (<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Document</title>
    </head>
    <body>
      
    </body>
    </html>this.props.isAuthorised) return <Redirect to={"/login"} />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.userProfile,
  isAuthorised: state.authorization.isAuthorised,
});

const mapDispatchToProps = {
  setUserProfile,
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);
