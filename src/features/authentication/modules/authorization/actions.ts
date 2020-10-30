import {
  authAPI,
  LoginInfoType,
  profileAPI,
  ResponseDataType,
  UserInfoType
} from "@socialAPI";
import * as types from "./types"
import {AppThunkType, TDispatch} from "@store";

// ==========Action Creators======================


export interface IGetCaptchaActionType {
  type: typeof types.GET_CAPTCHA_URL_SUCCESS,
  captchaUrl: string | null
}


export interface IAuthUserActon {
  type: typeof types.AUTH_USER,
  user: UserInfoType | {},
  isAuth: boolean
}

export type AuthActionsTypes = IAuthUserActon | IGetCaptchaActionType;

export const authUser = (user: UserInfoType | undefined,
                         isAuth: boolean): IAuthUserActon => (
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

export const me = (isAuth: boolean): AppThunkType => async (dispatch: TDispatch) => {

  const data: UserInfoType = await authAPI.me();
  if (data) {
    const authUserProfile = await profileAPI.getUser(data.id);
    dispatch(authUser(authUserProfile, isAuth));
  }

};


export const login = (formData: LoginInfoType): AppThunkType<Promise<string | never>> => (dispatch: TDispatch) => {
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