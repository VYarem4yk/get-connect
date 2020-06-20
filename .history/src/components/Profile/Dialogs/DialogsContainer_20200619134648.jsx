import "./Dialogs.css";
import Dialogs from "../Dialogs/Dialogs";
import { updateTextMessageCreator } from "../../../redux/dialogsReducer";
import { sendMessageCreator } from "../../../redux/dialogsReducer";
import { connect } from "react-redux";

import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    respondetsList: state.dialogsPage.respondetsList,
    dialog: state.dialogsPage.DialogData,
    curentMessageText: state.dialogsPage.curentMessageText,
  };
};

compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

let AuthRedirectComponent = withAuthRedirect(Dialogs);

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
