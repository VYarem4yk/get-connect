import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className="dialog">
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialogWrapper">
        <DialogItem id="Katarzyna" name="Katarzyna" />
        <DialogItem id="Igor" name="Igor" />
        <DialogItem id="Roma" name="Roma" />
        <DialogItem id="Alena" name="Alena" />
        <DialogItem id="Artem" name="Artem" />
        <DialogItem id="Natasha" name="Natasha" />
        <DialogItem id="Lesha" name="Lesha" />
        
      <div className="chatBar">
        <Dialog />
      </div>
    </div>
  );
};

export default Dialogs;
