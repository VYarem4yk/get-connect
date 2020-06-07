import React from "react";
import "./Header.css";
const Header = (props) => {
  return (
    <header className="app-header">
      <div className="logo-wrapper">
        <span className="logo">GC</span>
        <span>Get Connect</span>
      </div>
      {<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Document</title>
      </head>
      <body>
        
      </body>
      </html>props.isAuthorised ? (
        <span className="authorisation">{props.email}</span>
      ) : (
        <div className="authorisation">Login</div>
      )}
    </header>
  );
};

export default Header;
