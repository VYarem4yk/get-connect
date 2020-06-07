import React from "react";
import "./Header.css";
const Header = (props) => {
  return (
    <header className="app-header">
      <div className="logo-wrapper">
        <span className="logo">GC</span>
        <span>Get Connect</span>
      </div>
      {props.isAuthorised? <span></span>: }
      <div className="authorisation">Login</div>
    </header>
  );
};

export default Header;
