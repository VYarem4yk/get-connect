import React from "react";
import { connect } from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = () => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
