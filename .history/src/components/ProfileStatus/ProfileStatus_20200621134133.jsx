import React from "react";
import { Component } from "react";

class ProfileStatus extends Component {
  state = {
    editMode: true,
  };

  editModeActivate{}
  render() {
    if (this.state.editMode) {
      return (
        <div className="statusProfile">
          <input value="status"></input>
        </div>
      );
    } else {
      return (
        <div className="statusProfile">
          <div>status</div>
        </div>
      );
    }
  }
}

export default ProfileStatus;
