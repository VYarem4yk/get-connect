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
    if (!this.props.isAuthorised) return <Redirect to={"/login"} />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let AuthRedirectComponent = (props)=>{
  return <P
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
