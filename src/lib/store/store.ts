import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import {rootReducer} from "./root-reducer";

export const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));


/* eslint-enable */