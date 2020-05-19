import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import { UPDATE_TEXT_MESSAGE_CREATOR } from "../../../redux/store";
import { SEND_MESSAGE_CREATOR } from "../../../redux/store";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className="dialog">
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  let textMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(UPDATE_TEXT_MESSAGE_CREATOR(body));
  };
  let curentMessageText = props.store._state.curentMessageText;
  let sendMessage = () => {
    props.store.dispatch(SEND_MESSAGE_CREATOR());
  };

  return (
    <div className="dialogs">
      <div className="dialogWrapper">
        {props.store
          .getState()
          .dialogsPage.respondetsList.map(({ id, name }) => {
            return <DialogItem id={id} name={name} />;
          })}
      </div>

      <div className="chatBar">
        <Dialog store={props.store} />
        <div className="messageField">
          <textarea
            className="messageInput"
            onChange={textMessageChange}
            value={curentMessageText}
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
