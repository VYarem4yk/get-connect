import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import { TEXT_MESSAGE_CHANGE_ACTION_CREATOR } from "../../../redux/store";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className="dialog">
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Cons = (getState) => {
  getState;
};

const Dialogs = (props) => {
  let newMessage = React.createRef();

  let textMessageChange = () => {
    let textMessage = newMessage.current.value;
    props.store.dispatch(TEXT_MESSAGE_CHANGE_ACTION_CREATOR(textMessage));
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
            ref={newMessage}
            onchange={textMessageChange}
            value={props.store.getState().dialogsPage.curentDialogText}
          ></textarea>
          <button
            className="messageSend"
            onClick={() => console.log(props.store.getState())}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
