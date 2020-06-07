import React, { Component } from "react";
import Header from "./Header";
import Axios from axi

class HeaderContainer extends Component {
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`).then(
      (response) => {

        this.props.setUsers(response.data.items);
        this.props.countTotalUsers(response.data.totalCount);
      }
    );
  }

  render() {
    return <Header {...this.props} />;
  }
}

export default HeaderContainer;
