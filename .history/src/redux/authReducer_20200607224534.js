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
      return { ...state, ...action.data };
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

export default authReducer;
