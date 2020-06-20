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
  let textMessageChange = (event) => {
    let body = event.target.value;
    props.updateTextMessage(body);
  };

  let sendMessage = () => {
    props.sendMessage();
  };

  alert(props.isAuthorised);

  return (
    <div className="dialogs">
      <div className="dialogWrapper">
        {props.respondetsList.map(({ id, name }) => {
          return <DialogItem id={id} name={name} />;
        })}
      </div>

      <div className="chatBar">
        <Dialog dialog={props.dialog} />
        <div className="messageField">
          <textarea
            className="messageInput"
            onChange={textMessageChange}
            value={props.curentMessageText}
          ></textarea>
          <button className="messageSend" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
