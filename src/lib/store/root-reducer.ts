import {Action, AnyAction, combineReducers} from "redux";
import {authReducer, initReducer} from "@auth";
import {usersReducer} from "@users";
import {profileReducer} from "@profile";
import {dialogsReducer} from "@dialogs";
import {newsReducer} from "@news";
import {musicReducer} from "@music";
import {ThunkAction, ThunkDispatch} from "redux-thunk";


export const rootReducer = combineReducers({
  profile: profileReducer,
  users: usersReducer,
  auth: authReducer,
  init: initReducer,
  dialogs: dialogsReducer,
  news: newsReducer,
  music: musicReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export type ThunkType<ReturnType> = ThunkAction<ReturnType,
    RootState,
    unknown, //extra arg
    Action<string>>

export type DispatchType = ThunkDispatch<RootState, void, AnyAction>;