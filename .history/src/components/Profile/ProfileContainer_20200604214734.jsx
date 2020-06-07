import React, { Component } from "react";
import "./Profile.css";
import Profile from "./Profile";
import Axios from "axios";

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

export default connect()(ProfileContainer);
