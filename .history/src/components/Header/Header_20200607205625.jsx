import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header className="app-header">
      <div>
        <span className="logo">GC</span>
        <p>Get Connect</p>
      </div>

      <div className="authorisation">Login</div>
    </header>
  );
};

export default Header;
