import { profileAPI } from "../api/api";
const ADD_POST = "ADD-POST";
const TEXT_POST_CHANGE = "TEXT-POST-CHANGE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  PostData: [
    { id: "2", postText: "I've just started to learn React", likes: "20" },
    { id: "1", postText: "This is my first post!", likes: "15" },
  ],
  curentPostText: "",
  userProfile: null,
  status: "",
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

    case TEXT_POST_CHANGE: {
      let stateCopy = { ...state };
      stateCopy.curentPostText = action.newText;
      return stateCopy;
    }

    case SET_USER_PROFILE: {
      let stateCopy = { ...state };
      stateCopy.userProfile = { ...state.userProfile };
      stateCopy.userProfile = action.userProfile;
      return stateCopy;
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const textPostChangeCreator = (text) => ({
  type: TEXT_POST_CHANGE,
  newText: text,
});
export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});

export const setProfile = (userId) => {
  return (dispatch) => {
    profileAPI.setProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const setStatus = (userId, status)

export default profileReducer;
