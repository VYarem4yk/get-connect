import "./Dialogs.css";
import Dialogs from "../Dialogs/Dialogs";
import { updateTextMessageCreator } from "../../../redux/dialogsReducer";
import { sendMessageCreator } from "../../../redux/dialogsReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    respondetsList: state.dialogsPage.respondetsList,
    dialog: state.dialogsPage.DialogData,
    curentMessageText: state.dialogsPage.curentMessageText,
  };
};

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
