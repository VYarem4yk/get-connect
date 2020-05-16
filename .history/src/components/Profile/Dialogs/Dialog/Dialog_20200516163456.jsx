import React from "react";
import "./Dialog.css";

const Message = (props) => {
  return (
    <div className={`${props.messageWriter} message"}>{props.messageText}</div>
  );
};

const Dialog = () => {
  return (
    <div className="dialogWrapper">
      <div className="chatWrapper">
        <Message messageWriter="messageYour" messageText="Хай" />
        <Message messageWriter="messageRespondent" messageText="Как дела?" />
        <Message
          messageWriter="messageYour"
          messageText="Нормально, как сам?"
        />
        <Message messageWriter="messageRespondent" messageText="Тоже норм" />
      </div>
      <div className="inputMessage"></div>
    </div>
  );
};

export default Dialog;
