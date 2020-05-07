import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const AUTH_USER = "AUTH_USER";

let initialState = {
  user: {
    me: null,
    email: null,
    id: null,
    isAuth: false
  }
};
export default function authUserReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        user: {
          ...action.user,
          isAuth: action.user.isAuth
        }
      };
    default:
      return state;

  }
}
// ==========Action Creators======================
export const authUser = (user, isAuth) => (
  {
    type: AUTH_USER,
    user: {
      ...user,
      isAuth
    }
  }
);
// =====================Thunk Creators====================

export const me = (isAuth) => (dispatch) => {
  return authAPI.me().then((data) => {
    if (data) dispatch(authUser(data, isAuth));
  });
};
export const login = (formData) => (dispatch) => {
  return authAPI.login(formData).then((response) => {
    if (response.resultCode === 0) {
      dispatch(me(true));
    } else {
      let error = response.messages.length > 0 ? response.messages[0] :
        "Unknown Error";
      dispatch(stopSubmit("login", {
        _error: error
      }))
    }
  });
};

export const logout = () => (dispatch) => {
  return authAPI.logout().then(() => {
    dispatch(authUser(undefined, false));
  });
};