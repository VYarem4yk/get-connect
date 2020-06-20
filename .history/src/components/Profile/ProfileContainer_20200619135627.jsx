import React, { Component } from "react";
import "./Profile.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile, setProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    setProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
  profile: state.profilePage.userProfile,
});

const mapDispatchToProps = {
  setUserProfile,
};

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);
