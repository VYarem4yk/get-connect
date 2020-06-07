import React, { Component } from "react";

class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} />;
  }
}

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">GC</div>
      <p>Get Connect</p>
    </header>
  );
};

export default Header;
