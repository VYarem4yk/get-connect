import React from "react";
import "./Dialog.css";

const Dialog = () => {
  return (
    <div className="dialogWrapper">
      <div className="chatWrapper">
        <div className="messageYour message">Привет!</div>
        <div className="messageRespondent message">Хай</div>
        <div className="messageYour message">Как дела?</div>
        <div className="messageRespondent message">Нормально, как сам?</div>
        <div className="messageYour message">Тоже норм</div>
      </div>
      <div className="inputMessage"></div>
    </div>
  );
};

export default Dialog;
