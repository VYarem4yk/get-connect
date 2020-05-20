import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import { updateTextMessageCreator } from "../../../redux/dialogsReducer";
import { sendMessageCreator } from "../../../redux/dialogsReducer";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className="dialog">
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Dialogs = (props) => {
  let state = props.store.getState();
  let textMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateTextMessageCreator(body));
    debugger;
  };
  let curentMessageText = state.dialogsPage.curentMessageText;
  let sendMessage = () => {
    props.store.dispatch(sendMessageCreator());
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
