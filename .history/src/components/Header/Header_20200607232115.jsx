import React from "react";
import "./Header.css";
const Header = (props) => {
  debugger;
  return (
    <header className="app-header">
      <div className="logo-wrapper">
        <span className="logo">GC</span>
        <span>Get Connect</span>
      </div>
      {props.isAuthorised ? (
        <span className="authorisation">{props.email}</span>
      ) : (
        <div className="authorisation">
          <a href="https://social-network.samuraijs.com/login" target="_blank">
            Login
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
