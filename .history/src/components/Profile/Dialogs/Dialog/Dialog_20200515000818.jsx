import React from "react";

const Dialog = () => {
  return (
    <div className="dialogWrapper">
      <div className="chatWrapper">
        <div className="messageYour">Привет!</div>
        <div className="messageRespondent">Хай</div>
        <div className="messageYour">Как дела?</div>
        <div className="messageRespondent">Нормально, как сам?</div>
        <div className="messageYour message">Тоже норм</div>
      </div>
      <div className="inputMessage"></div>
    </div>
  );
};

export default Dialog;
