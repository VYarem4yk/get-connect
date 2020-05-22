import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unFollowAC } from "../../../redux/usersReducer";

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
    unFollow: (userID) => {
      dispatch(unFollowAC(userID));
    },
    setUsers: (users)=>{
      dispatch(un)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
