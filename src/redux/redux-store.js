import {createStore, combineReducers, applyMiddleware} from "redux";
import dialogsPageReducer from "./dialogs-reducer";
import profilePageReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersPageReducer from "./users-reducer";
import authUserReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";

let reducers = combineReducers({
  ProfilePage: profilePageReducer,
  MessagesPage: dialogsPageReducer,
  Sidebar: sidebarReducer,
  UsersPage: usersPageReducer,
  authUser: authUserReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;
