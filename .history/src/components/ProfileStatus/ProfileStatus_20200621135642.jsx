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
  editModeDeactivate = () => {
    this.setState({
      editMode: false,
    });
  };
  render() {
    if (this.state.editMode) {
      return (
        <div className="statusProfile">
          <input value="status" onClick={ed}></input>
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
