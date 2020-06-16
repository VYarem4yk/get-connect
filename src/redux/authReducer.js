import { authorisationAPI } from "../api/api";

const SET = "SET";

let initialState = {
  isAuthorised: false,
  id: null,
  login: null,
  email: null,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORISATION: {
      return { ...state, ...action.data, isAuthorised: true };
    }

    default:
      return state;
  }
};

const SET_AUTHORISATION = "SET_AUTHORISATION";

export const setAuthorisation = (id, login, email) => ({
  type: SET_AUTHORISATION,
  data: { id, login, email },
});

export const login = () => {
  return (dispatch) => {
    authorisationAPI.login().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthorisation(id, login, email));
      }
    });
  };
};

export default authReducer;
