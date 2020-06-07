import React, { Component } from "react";
import "./Profile.css";
import Profile from "./Profile";
import Axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";

class ProfileContainer extends Component {
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(
      (response) => {
        debugger;
        this.props.setUserProfile(response.data.items);
      }
    );
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = () => ({
  profile: this.state.profilePage.userProfile,
});

const mapDispatchToProps = {
  setUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
