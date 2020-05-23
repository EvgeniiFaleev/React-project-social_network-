import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const AUTH_USER = "AUTH_USER";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  user: {
    me: null,
    email: null,
    id: null,
    isAuth: false,
  },
  captchaUrl: null
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
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.captchaUrl
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
export const getCaptchaUrlSuccess = (captchaUrl) =>(
  {
    type: GET_CAPTCHA_URL_SUCCESS,
    captchaUrl
  }
)
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
      dispatch(getCaptchaUrlSuccess(null));
    } else {
      if(response.resultCode === 10){
        dispatch(getCaptcha());
      }
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
export const getCaptcha = () => (dispatch)=> {
  authAPI.getCaptcha().then((captchaUrl)=>{
    dispatch(getCaptchaUrlSuccess(captchaUrl));
  })
};