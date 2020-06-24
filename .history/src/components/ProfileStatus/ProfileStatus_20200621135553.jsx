import React from "react";
import { Component } from "react";

class ProfileStatus extends Component {
  state = {
    editMode: false,
  };

  editModeActivate = () => {
    this.setState({
      editMode: true,
    });
  };
  editModeActivate = () => {
    this.setState({
      editMode: true,
    });
  };
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
          <div onDoubleClick={this.editModeActivate}>Everythig is OK</div>
        </div>
      );
    }
  }
}

export default ProfileStatus;
