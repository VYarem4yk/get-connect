import { connect } from "react-redux";
import Users from "./Users";
import React, { Component } from "react";
import {
  follow,
  unFollow,
  setCurentPage,
  getUsers,
} from "../../../redux/usersReducer";

class UsersInfoContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.curentPage, this.props.pageSize);
  }
  onPageChanged = (page) => {
    debugger;
    this.props.getUsers(page.selected, this.props.pageSize);
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
        toggleIsFollowingEnabled={this.props.toggleIsFollowingEnabled}
        isFollowingEnabled={this.props.isFollowingEnabled}
        followingDisabledUserID={this.props.followingDisabledUserID}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    curentPage: state.usersPage.curentPage,
    pageSize: state.usersPage.pageSize,
    isLoading: state.usersPage.isLoading,
    isFollowingEnabled: state.usersPage.isFollowingEnabled,
    followingDisabledUserID: state.usersPage.followingDisabledUserID,
  };
};

const mapDispatchToProps = {
  follow,
  unFollow,
  setCurentPage,
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersInfoContainer);
