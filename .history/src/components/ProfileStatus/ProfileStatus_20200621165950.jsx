import React from "react";
import { Component } from "react";
import { updateStatus } from "../../redux/profileReducer";

class ProfileStatus extends Component {
  state = {
    editMode: false,
    status
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
    this.props.updateStatus();
  };
  render() {
    if (this.state.editMode) {
      return (
        <div className="statusProfile">
          <input
            value={this.props.status}
            autoFocus={true}
            onBlur={this.editModeDeactivate}
          ></input>
        </div>
      );
    } else {
      return (
        <div className="statusProfile">
          <div onDoubleClick={this.editModeActivate}>{this.props.status}</div>
        </div>
      );
    }
  }
}

export default ProfileStatus;
