export const ADD_POST_ACTION_CREATOR = () => ({ type: "ADD-POST" });
export const TEXT_POST_CHANGE_ACTION_CREATOR = (text) => ({
  type: "TEXT-POST-CHANGE",
  newText: text,
});

const ADD_POST = "ADD-POST";
const TEXT_POST_CHANGE = "TEXT-POST-CHANGE";

export let store = {
  _callSubscriber() {
    console.log("state was changed");
  },
  _state: {
    profilePage: {
      PostData: [
        {
          id: "5",
          postText: `Weeekend!!! Pizza and BEER!=)`,
          likes: "100",
        },
        {
          id: "4",
          postText: `My wife ask me to write APP which would count Child Gender and thats it : https://vyarem4yk.github.io/child-gender/ `,
          likes: "6",
        },
        {
          id: "3",
          postText:
            "My first React-App Calculator: https://vyarem4yk.github.io/Calculator-01/",
          likes: "5",
        },
        { id: "2", postText: "I've just started to learn React", likes: "20" },
        { id: "1", postText: "This is my first post!", likes: "15" },
      ],
      curentPostText: "",
    },
    dialogsPage: {
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
    },
    friends: [
      {
        friendId: 1,
        friendName: "Katarzyna",
        friendAvatar:
          "https://sun9-2.userapi.com/c854224/v854224678/89482/cg3Pty7zkLE.jpg?ava=1",
      },
      {
        friendId: 2,
        friendName: "Igor",
        friendAvatar:
          "https://sun9-62.userapi.com/c855324/v855324226/e948c/A8UZ7fwcG-U.jpg?ava=1",
      },
      {
        friendId: 3,
        friendName: "Lesha",
        friendAvatar:
          "https://sun9-8.userapi.com/c857424/v857424375/2b90e/cy94o_L6YnI.jpg?ava=1",
      },
      {
        friendId: 4,
        friendName: "Sasha",
        friendAvatar:
          "https://sun9-22.userapi.com/c855732/v855732265/14f14b/vpHKUsR2rGk.jpg?ava=1",
      },
      {
        friendId: 5,
        friendName: "Artem",
        friendAvatar:
          "https://sun9-67.userapi.com/c845321/v845321504/8c50b/rOnA4_Nz6O4.jpg?ava=1",
      },
      {
        friendId: 6,
        friendName: "Natasha",
        friendAvatar:
          "https://sun1.beltelecom-by-minsk.userapi.com/jAfPXNexKdF5JrShydoME16K-bcW6D80uphBug/LuiKmPUymTY.jpg?ava=1",
      },
    ],
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: "5",
        postText: this._state.profilePage.curentPostText,
        likes: "0",
      };
      this._state.profilePage.PostData.unshift(newPost);
      this._state.profilePage.curentPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === TEXT_POST_CHANGE) {
      this.getState().profilePage.curentPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === MESSAGE)
  },
};
