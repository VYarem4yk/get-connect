import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
      profileReducer: profileReducer,
      dialogsReducer: dialogsReducer,
      friendsReducer: frie
});

let store = createStore();

export default store;