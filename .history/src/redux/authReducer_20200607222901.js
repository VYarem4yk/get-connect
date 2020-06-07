const SET = "SET";

let initialState = {

    id: null,
    login: null,
    email: "vyarem4yk@gmail.com"
  },
  "messages": [
    
  ],
  "resultCode": 0
}
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
