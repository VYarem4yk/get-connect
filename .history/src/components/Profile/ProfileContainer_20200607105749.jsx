import React, { Component } from "react";
import "./Profile.css";
import Profile from "./Profile";
import Axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.userId;
    debugger;
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`).then(
      (response) => {
        this.props.setUserProfile(response.data);
      }
    );
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.userProfile,
});

const mapDispatchToProps = {
  setUserProfile,
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);
