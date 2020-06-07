const SET = "SET";

let initialState = {
  isAuthorised: false,
  id: null,
  login: null,
  email: null,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET: {
      let stateCopy = { ...state };

      return stateCopy;
    }

    default:
      return state;
  }
};

const SET_AUTHORISATION = "SET_AUTHORISATION";

const setAuthorisation = (id, login, email)=>({
  type: SET_AUTHORISATION,
  id:id,
  login:login
  email:
})

export default authReducer;
