import React from "react";
import "./Navigation.css";
const Navigation = () => {
  return (
    <nav className="app-navigation">
      <div className="nav-components">
        <div></div>
        <li>Profile</li>
        <li>Messages</li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </div>
    </nav>
  );
};

export default Navigation;
