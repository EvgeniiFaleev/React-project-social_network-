import * as types from "./types"

const initialState = {
  user: {
    me: null,
    email: null,
    id: null,
  },
  isAuth: false,
  captchaUrl: null
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return {
        ...state,
        user: {
          ...action.user,
        },
        isAuth: action.isAuth
      };
    case types.GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.captchaUrl
      };
    default:
      return state;

  }
};