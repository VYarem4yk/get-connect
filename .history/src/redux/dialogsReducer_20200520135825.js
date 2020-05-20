const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  respondetsList: [
    { id: "Katarzyna", name: "Katarzyna" },
    { id: "Igor", name: "Igor" },
    { id: "Roma", name: "Roma" },
    { id: "Alena", name: "Alena" },
    { id: "Artem", name: "Artem" },
    { id: "Natasha", name: "Natasha" },
    { id: "Lesha", name: "Lesha" },
    { id: "Sasha", name: "Sasha" },
  ],
  DialogData: [
    { id: "1", text: "Хай", owner: "messageYour" },
    { id: "2", text: "Как дела?", owner: "messageRespondent" },
    { id: "3", text: "Нормально, как сам?", owner: "messageYour" },
    { id: "4", text: "Тоже норм", owner: "messageRespondent" },
    { id: "5", text: "Крутяк", owner: "messageYour" },
  ],
  curentMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
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
