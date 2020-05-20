import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
  dialogsReducer: dialogsReducer,
  friendsReducer: friendsReducer,
});

let store = createStore();

export default store;
