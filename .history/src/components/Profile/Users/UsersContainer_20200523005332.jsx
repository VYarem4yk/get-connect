import React from "react";
import { connect } from "react-redux";
import Users from "./Users";

let mapStateToProps = (state)=>{
  return {
    users: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);