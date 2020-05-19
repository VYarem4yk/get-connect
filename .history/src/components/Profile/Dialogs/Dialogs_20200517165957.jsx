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
        <textarea className="messageInput"></textarea>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
