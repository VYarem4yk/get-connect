import React from "react";
import "./Navigation.css";
const Navigation = () => {
  return (
    <nav className="app-navigation">
      <ul className="nav-components">
        <li>Profile</li>
        <li>Messages</li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
};

export default Navigation;
