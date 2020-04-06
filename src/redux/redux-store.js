import { createStore, combineReducers } from "redux";
import dialogsPageReducer from "./dialogs-reducer";
import profilePageReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersPageReducer from "./users-reducer";
import authUserReducer from "./auth-reducer";

let reducers = combineReducers({
  ProfilePage: profilePageReducer,
  MessagesPage: dialogsPageReducer,
  Sidebar: sidebarReducer,
  UsersPage: usersPageReducer,
  authUser: authUserReducer
});

let store = createStore(reducers);

export default store;
