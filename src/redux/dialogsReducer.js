const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TEXT_MESSAGE:
      state.curentMessageText = action.body;
      return state;
    case SEND_MESSAGE:
      let newMessage = {
        id: "6",
        text: state.curentMessageText,
        owner: "messageYour",
      };
      state.curentMessageText = "";
      state.DialogData.push(newMessage);
      return state;
    default:
      return state;
  }
};

export const updateTextMessageCreator = (body) => ({
  type: "UPDATE-TEXT-MESSAGE",
  body: body,
});
export const sendMessageCreator = () => ({ type: "SEND-MESSAGE" });

export default dialogsReducer;
