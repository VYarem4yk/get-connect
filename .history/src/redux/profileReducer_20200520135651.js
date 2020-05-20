const ADD_POST = "ADD-POST";
const TEXT_POST_CHANGE = "TEXT-POST-CHANGE";

let initialState = {
   {
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
  }
}


const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: "5",
        postText: state.curentPostText,
        likes: "0",
      };
      state.PostData.unshift(newPost);
      state.curentPostText = "";
      return state;
    case TEXT_POST_CHANGE:
      state.curentPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: "ADD-POST" });
export const textPostChangeCreator = (text) => ({
  type: "TEXT-POST-CHANGE",
  newText: text,
});

export default profileReducer;
