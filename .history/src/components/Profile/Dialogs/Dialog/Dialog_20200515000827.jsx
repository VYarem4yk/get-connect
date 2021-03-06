import React from "react";

const Dialog = () => {
  return (
    <div className="dialogWrapper">
      <div className="chatWrapper">
        <div className="messageYour">Привет!</div>
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
