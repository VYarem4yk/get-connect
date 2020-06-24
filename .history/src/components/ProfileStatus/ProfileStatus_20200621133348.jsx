import React from "react";
import { Component } from "react";

class ProfileStatus extends Component {
  state = {
    editMode: false,
  };
  render() {
      if(!this.state.editMode){}
    return (
      <div className="statusProfile">
        <div>status</div>
        <input value="status"></input>
      </div>
    );
  }
}

export default ProfileStatus;
