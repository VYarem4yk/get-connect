const SET = "SET";

let initialState = {
  
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

export default authReducer;
