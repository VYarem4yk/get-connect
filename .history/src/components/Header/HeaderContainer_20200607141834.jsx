import React, { Component } from "react";
import Header from "./Header";

class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} />;
  }
}

export default HeaderContainer;
