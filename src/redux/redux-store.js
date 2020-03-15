import { createStore, combineReducers } from "redux";
import dialogsPageReducer from "./dialogs-reducer";
import profilePageReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
  ProfilePage: profilePageReducer,
  MessagesPage: dialogsPageReducer,
  friends: sidebarReducer
});

let store = createStore(reducers);

export default store;
