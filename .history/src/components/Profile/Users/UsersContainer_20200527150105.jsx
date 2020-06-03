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
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`
    ).then((response) => {
      this.props.setUsers(response.data.items);
      this.props.countTotalUsers(response.data.totalCount);
    });
  }
  onPageChanged = (page) => {
    this.props.setCurentPage(page);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
    ).then((response) => {
      this.props.setUsers(response.data.items);
      this.props.countTotalUsers(response.data.totalCount);
    });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return <Users pages={this.pages} />;
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
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
