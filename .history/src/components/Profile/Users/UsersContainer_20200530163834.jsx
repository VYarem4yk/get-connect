import { connect } from "react-redux";
import Users from "./Users";
import Axios from "axios";
import React, { Component } from "react";
import {
  followAC,
  unFollowAC,
  setUsersAC,
  countTotalUsersAC,
  setCurentPageAC,
} from "../../../redux/usersReducer";

class UsersInfoContainer extends Component {
  componentDidMount() {
    Axios.get(
      `http://localhost:5000/v1/articles/${this.props.curentPage}`
    ).then((response) => {
      this.props.setUsers(response.data.items);
      this.props.countTotalUsers(response.data.totalCount);
    });
  }


  render() {
    return (
      <Users
        onPageChanged={this.onPageChanged}
        curentPage={this.props.curentPage}
        users={this.props.users}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    curentPage: state.usersPage.curentPage,
    pageSize: state.usersPage.pageSize,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID));
    },
    unFollow: (userID) => {
      dispatch(unFollowAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    countTotalUsers: (totalCount) => {
      dispatch(countTotalUsersAC(totalCount));
    },
    setCurentPage: (curentPage) => {
      dispatch(setCurentPageAC(curentPage));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersInfoContainer);
