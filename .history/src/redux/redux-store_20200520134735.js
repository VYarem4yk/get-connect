import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
      profileReducer: profileReducer,
      dialogsReducer: di
});

let store = createStore();

export default store;
