import * as types from "./types"
import {ProfileType} from "@socialAPI";
import {AuthActionsTypes} from "@auth/modules/authorization/actions";

interface AuthState {
  user: ProfileType,
  isAuth: boolean,
  captchaUrl: string | null
}

const initialState: AuthState = {
  user: {
    aboutMe: null,
    contacts: null,
    lookingForAJob: null,
    lookingForAJobDescription: null,
    fullName: null,
    userId: null,
    photos: null,
  },
  isAuth: false,
  captchaUrl: null
};

export const reducer = (state = initialState, action: AuthActionsTypes): AuthState => {
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