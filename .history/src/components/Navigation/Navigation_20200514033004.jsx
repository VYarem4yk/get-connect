import React from "react";
import "./Navigation.css";
const Navigation = () => {
  return (
    <nav className="app-navigation">
      <div className="nav-components">
        <div>
          <a href="/profile">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
