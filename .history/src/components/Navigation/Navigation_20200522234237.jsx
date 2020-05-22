import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";
const Navigation = (props) => {
  return (
    <nav className="app-navigation">
      <div className="nav-components">
        <div className="nav-component">
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className="nav-component">
          <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div className="nav-component">
          <NavLink to="/users">News</NavLink>
        </div>
        <div className="nav-component">
          <NavLink to="/music">Music</NavLink>
        </div>
        <div className="nav-component">
          <NavLink to="/settings">Settings</NavLink>
        </div>
      </div>
      <div>
        <h3 className="friends"> Friends</h3>
        <div className="friendsList">
          <FriendsContainer />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
