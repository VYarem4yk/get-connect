let initialState = {};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET: {
      {}
      return stateCopy;
    }

    default:
      return state;
  }
};
export default authReducer;
