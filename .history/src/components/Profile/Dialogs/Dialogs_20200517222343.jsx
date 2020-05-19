import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";

let newMe

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className="dialog">
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Dialogs = (props) => {
  let { respondetsList, DialogData } = props;

  return (
    <div className="dialogs">
      <div className="dialogWrapper">
        {respondetsList.map(({ id, name }) => {
          return <DialogItem id={id} name={name} />;
        })}
      </div>

      <div className="chatBar">
        <Dialog DialogData={DialogData} />
        <div className="messageField">
          <textarea className="messageInput"></textarea>
          <button className="messageSend">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
