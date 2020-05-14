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
          <NavLink href="/dialogs">Messages</NavLink>
        </div>
        <div>
          <NavLink href="/news">News</NavLink>
        </div>
        <div>
          <NavLink to="/music">Music</NavLink>
        </div>
        <div>
          <NavLink to="/settings">Settings</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
