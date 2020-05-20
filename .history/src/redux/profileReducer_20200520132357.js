const ADD_POST = "ADD-POST";
const TEXT_POST_CHANGE = "TEXT-POST-CHANGE";

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
