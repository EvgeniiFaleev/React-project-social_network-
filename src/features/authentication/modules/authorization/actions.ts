import {
  authAPI,
  LoginInfoType,
  profileAPI,
  ProfileType,
  ResponseDataType,
  UserInfoType
} from "@socialAPI";
import * as types from "./types"
import {AppThunkType, TDispatch} from "@store";
import {Action} from "redux";

// ==========Action Creators======================


 interface IGetCaptchaActionType extends Action<typeof types.GET_CAPTCHA_URL_SUCCESS> {
  captchaUrl: string | null
}


interface IAuthUserActonType extends Action<typeof types.AUTH_USER> {
  user: ProfileType | {},
  isAuth: boolean
}

export type AuthActionsTypes =
    IAuthUserActonType
    | IGetCaptchaActionType;

export const authUser = (user: undefined | ProfileType,
                         isAuth: boolean): IAuthUserActonType => (
    {
      type: types.AUTH_USER,
      user: {
        ...user
      },
      isAuth
    }
);


export const setCaptchaUrlSuccess = (captchaUrl: string | null): IGetCaptchaActionType => (
    {
      type: types.GET_CAPTCHA_URL_SUCCESS,
      captchaUrl
    }
);

// =====================Thunk Creators====================

export const me = (isAuth: boolean): AppThunkType<Promise<void>> => async (dispatch: TDispatch) => {

  const data: UserInfoType = await authAPI.me();
  if (data) {
    const authUserProfile: ProfileType = await profileAPI.getUser(data.id);
    dispatch(authUser(authUserProfile, isAuth));
  }

};


export const login = (formData: LoginInfoType): AppThunkType<Promise<string | never>> =>
    (dispatch: TDispatch) => {
      return authAPI.login(formData).then((response: ResponseDataType) => {
        if (response.resultCode === 0) {
          dispatch(me(true));
          dispatch(setCaptchaUrlSuccess(null));
        } else {
          if (response.resultCode === 10) {
            dispatch(getCaptcha());
          }
          const error = response.messages.length > 0 ?
              response.messages[0] :
              "Unknown Error";
          return error;
        }
      });
    };

export const logout = (): AppThunkType<Promise<void>> => (dispatch: TDispatch) => {
  return authAPI.logout().then(() => {
    dispatch(authUser(undefined, false));
  });
};

export const getCaptcha = (): AppThunkType => (dispatch: TDispatch) => {
  authAPI.getCaptcha().then((captchaUrl: string) => {
    dispatch(setCaptchaUrlSuccess(captchaUrl));
  })
};