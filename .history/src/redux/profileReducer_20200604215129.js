const ADD_POST = "ADD-POST";
const TEXT_POST_CHANGE = "TEXT-POST-CHANGE";


let initialState = {
  PostData: [
    { id: "2", postText: "I've just started to learn React", likes: "20" },
    { id: "1", postText: "This is my first post!", likes: "15" },
  ],
  curentPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: "5",
        postText: state.curentPostText,
        likes: "0",
      };
      let stateCopy = { ...state };
      stateCopy.PostData = [...state.PostData];
      stateCopy.PostData.unshift(newPost);
      stateCopy.curentPostText = "";
      return stateCopy;
    }

    case TEXT_POST_CHANGE:
      let stateCopy = { ...state };
      stateCopy.curentPostText = action.newText;
      return stateCopy;
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
