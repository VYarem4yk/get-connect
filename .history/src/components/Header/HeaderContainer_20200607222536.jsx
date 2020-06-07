import React, { Component } from "react";
import Header from "./Header";

class HeaderContainer extends Component {
  componentDidMount() {
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/au`
    ).then((response) => {
      this.props.setUsers(response.data.items);
      this.props.countTotalUsers(response.data.totalCount);
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

export default HeaderContainer;
