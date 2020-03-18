import { createStore, combineReducers } from "redux";
import dialogsPageReducer from "./dialogs-reducer";
import profilePageReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = "ADD-POST";
const POST_WATCH = "POST-WATCH";
const SUBSCRIBE = "SUBSCRIBE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const SEND_MESSAGE = "SEND_NEW_MESSAGE";

let reducers = combineReducers({
  ProfilePage: profilePageReducer,
  MessagesPage: dialogsPageReducer,
  friends: sidebarReducer
});

let store = createStore(reducers);

export default store;
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (value) => ({
  type: POST_WATCH,
  value: value
});
export const updateNewMessageActionCreator = (value) => ({
  type: UPDATE_NEW_MESSAGE,
  value: value
});
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
