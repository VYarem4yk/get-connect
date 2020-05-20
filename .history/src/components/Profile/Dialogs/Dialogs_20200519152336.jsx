import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import { UPDATE_TEXT_MESSAGE_CREATOR } from "../../../redux/store";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className="dialog">
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Dialogs = (props) => {
  let newMessage = React.createRef();

  let textMessageChange = (event) => {
    let textMessage = event..value;
    props.store.dispatch(UPDATE_TEXT_MESSAGE_CREATOR(textMessage));
  };

  let sendMessage=()=>{
    alert()
  }

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
            onchange={textMessageChange}
            value={props.store.getState().dialogsPage.curentMessageText}
          ></textarea>
          <button className="messageSend" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;