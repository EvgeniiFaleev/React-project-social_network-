import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsPageReducer from "./dialogs-reducer";
import profilePageReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersPageReducer from "./users-reducer";
import authUserReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";


let reducers = combineReducers({
  ProfilePage: profilePageReducer,
  MessagesPage: dialogsPageReducer,
  Sidebar: sidebarReducer,
  UsersPage: usersPageReducer,
  authUser: authUserReducer,
  form: formReducer,
  app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;
export default store;
