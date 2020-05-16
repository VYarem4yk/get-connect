import React from "react";
import "./Dialog.css";

const Message = (props) => {
  return (
    <div className={props.messageWriter + "message"}>{props.messageText}</div>
  );
};

const Dialog = () => {
  return (
    <div className="dialogWrapper">
      <div className="chatWrapper">
        <Message messageWriter="messageYour" messageText="Хай" />
        <Message messageWriter="messageYour" messageText="Как дела?" />
        <Message messageWriter="messageYour" messageText="Хай" />
        <Message messageWriter="messageYour" messageText="Хай" />
        
        <div className="messageYour message">Как дела?</div>
        <div className="messageRespondent message">Нормально, как сам?</div>
        <div className="messageYour message">Тоже норм</div>
      </div>
      <div className="inputMessage"></div>
    </div>
  );
};

export default Dialog;
