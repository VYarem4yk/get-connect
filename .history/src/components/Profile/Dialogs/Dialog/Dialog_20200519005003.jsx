import React from "react";
import "./Dialog.css";

const Message = (props) => {
  return (
    <div className={`${props.messageWriter} message`}>{props.messageText}</div>
  );
};

const Dialog = (props) => {
  debugger;
  return (
    <div className="dialogWrapper">
      <div className="chatWrapper">
        {props.store.dialogsPage.DialogData.map(({ text, owner }) => (
          <Message messageWriter={owner} messageText={text} />
        ))}
      </div>
      <div className="inputMessage"></div>
    </div>
  );
};

export default Dialog;
