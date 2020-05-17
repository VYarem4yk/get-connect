import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
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
          <NavLink to="/news">News</NavLink>
        </div>
        <div className="nav-component">
          <NavLink to="/music">Music</NavLink>
        </div>
        <div className="nav-component">
          <NavLink to="/settings">Settings</NavLink>
        </div>
      </div>
      <div className="friendsList">
        <h3>Friends</h3>
        <Friends friendsList={props.friends} />
      </div>
    </nav>
  );
};

export default Navigation;
