import "./Dialogs.css";
import Dialogs from "../Dialogs/Dialogs";
import { updateTextMessageCreator } from "../../../redux/dialogsReducer";
import { sendMessageCreator } from "../../../redux/dialogsReducer";
import { connect, Redirect } from "react-redux";
import React from "react";

let mapStateToProps = (state) => {
  return {
    respondetsList: state.dialogsPage.respondetsList,
    dialog: state.dialogsPage.DialogData,
    curentMessageText: state.dialogsPage.curentMessageText,
    isAuthorised: state.authorization.isAuthorised,
  };
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapDispatchToProps = (dispatch) => {
  return {
    updateTextMessage: (body) => {
      dispatch(updateTextMessageCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;