import React from "react";
import "./Dialogs.css";
import Dialogs from "../Dialogs/Dialogs";
import { updateTextMessageCreator } from "../../../redux/dialogsReducer";
import { sendMessageCreator } from "../../../redux/dialogsReducer";
import StoreContext from "../../../StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext>
      {(store) => {
        let textMessageChange = (body) => {
          store.dispatch(updateTextMessageCreator(body));
        };
        let curentMessageText = store.getState().dialogsPage.curentMessageText;
        let sendMessage = () => {
          store.dispatch(sendMessageCreator());
        };
        return (
          <Dialogs
            updateTextMessage={textMessageChange}
            curentMessageText={curentMessageText}
            sendMessage={sendMessage}
            respondetsList={store.getState().dialogsPage.respondetsList}
            dialog={store.getState().dialogsPage.DialogData}
          />
        );
      }}
    </StoreContext>
  );
};

export default DialogsContainer;
