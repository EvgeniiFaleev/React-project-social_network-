import {combineReducers} from "redux";
import {authReducer} from "../../features/autnentification";
import {usersReducer} from "../../features/users";
import {profileReducer} from "../../features/profile";
import {initReducer} from "../../features/autnentification";
import {dialogsReducer} from "../../features/dialogs";
import {newsReducer} from "../../features/news";
import {musicReducer} from "../../features/music";


export const rootReducer = combineReducers({
  profile: profileReducer,
  users: usersReducer,
  auth: authReducer,
  init: initReducer,
  dialogs: dialogsReducer,
  news: newsReducer,
  music: musicReducer
});
