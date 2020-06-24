import React, { Component } from "react";
import "./Profile.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile, setProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    setProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.userProfile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, { setUserProfile, getUserStatus }),
  withRouter
  /*  withAuthRedirect */
)(ProfileContainer);
