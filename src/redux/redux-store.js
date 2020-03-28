import { createStore, combineReducers } from "redux";
import dialogsPageReducer from "./dialogs-reducer";
import profilePageReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import friendsPageReducer from "./friends-reducer";

let reducers = combineReducers({
  ProfilePage: profilePageReducer,
  MessagesPage: dialogsPageReducer,
  Sidebar: sidebarReducer,
  FriendsPage: friendsPageReducer
});

let store = createStore(reducers);

export default store;
