import { connect } from "react-redux";
import Users from "./Users";
import Axios from "axios";
import React, { Component } from "react";
import {
  follow,
  unFollow,
  setUsers,
  countTotalUsers,
  setCurentPage,
  toggleIsLoading,
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
    this.props.toggleIsLoading(true);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
    ).then((response) => {
      this.props.toggleIsLoading(false);
      this.props.setUsers(response.data.items);
      this.props.countTotalUsers(response.data.totalCount);
    });
  };

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
        isLoading={this.props.isLoading}
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
    isLoading: state.usersPage.isLoading,
  };
};

let mapDispatchToProps = {
  follow,
  unFollow,
  setUsers,
  countTotalUsers,
  setCurentPage,
  toggleIsLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersInfoContainer);
