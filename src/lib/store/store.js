import {applyMiddleware, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import {rootReducer} from "./root-reducer";


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));
window.store = store;

