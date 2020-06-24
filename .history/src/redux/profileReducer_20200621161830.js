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

    case SET_STATUS: {
      let stateCopy = { ...state };
      stateCopy.status = action.status;
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
export const setStatus = (status) => ({
  type: SET_STATUS,
  status: status,
});

export const setProfile = (userId) => {
  return (dispatch) => {
    profileAPI.setProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};

export const updateStatus = (userId) => {
  return (dispatch) => {
    profileAPI.updateStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};

export default profileReducer;
