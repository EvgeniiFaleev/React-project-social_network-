import {authAPI} from "../../../../api/api";
import * as types from "./types"
// ==========Action Creators======================



export const authUser = (user, isAuth) => (
  {
    type: types.AUTH_USER,
    user: {
      ...user,
      isAuth
    }
  }
);

export const getCaptchaUrlSuccess = (captchaUrl) =>(
  {
    type: types.GET_CAPTCHA_URL_SUCCESS,
    captchaUrl
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
      dispatch(getCaptchaUrlSuccess(null));
    } else {
      if(response.resultCode === 10){
        dispatch(getCaptcha());
      }
      const error = response.messages.length > 0 ? response.messages[0] :
        "Unknown Error";
      return error;
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