import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="app-navigation">
      <div className="nav-components">
        <div>
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <div>
          <a href="/dialogs">Messages</a>
        </div>
        <div>
          <a href="/news">News</a>
        </div>
        <div>
          <a href="/music">Music</a>
        </div>
        <div>
          <a href="/settings">Settings</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
