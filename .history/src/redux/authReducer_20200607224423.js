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
      let stateCopy = { ...state };
      stateCopy.id = action.id;
      stateCopy.login = action.login;
      stateCopy.email = action.email;
      state.isAuthorised = true;

      return stateCopy;
    }

    default:
      return state;
  }
};

const SET_AUTHORISATION = "SET_AUTHORISATION";

export const setAuthorisation = (id, login, email) => ({
  type: SET_AUTHORISATION,
  data: 
});

export default authReducer;