import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
      profileReducer: profileReducer
});

let store = createStore();

export default store;
