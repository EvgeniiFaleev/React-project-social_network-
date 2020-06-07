import {combineReducers} from "redux";
import {authReducer} from "../../autnentification";
import {usersReducer} from "../../users/";
import {profileReducer} from "../../profile/";
import {initReducer} from "../../autnentification/";
import {dialogsReducer} from "../../dialogs/";


export const rootReducer = combineReducers({
  profile: profileReducer,
  users: usersReducer,
  auth: authReducer,
  init: initReducer,
  dialogs: dialogsReducer
});
