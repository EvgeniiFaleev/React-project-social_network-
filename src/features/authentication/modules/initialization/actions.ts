import * as  types from "./types"
import * as authActions from "../authorization/actions";
import {AppThunkType, TDispatch} from "@store";

// ==========Action Creators======================
export interface InitSuccessActionType {
  type: typeof types.INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitSuccessActionType => (
    {
      type: types.INITIALIZED_SUCCESS
    }
);

export interface ToggleFetchingActionType {
  type: typeof types.TOGGLE_IS_FETCHING,
  isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): ToggleFetchingActionType => (
    {
      type: types.TOGGLE_IS_FETCHING,
      isFetching
    }
);

export type InitActions =
    InitSuccessActionType
    | ToggleFetchingActionType;
// =====================Thunk Creators====================

export const initializeApp = (): AppThunkType => (dispatch: TDispatch) => {
  return dispatch(authActions.me(true)).then(() => {
    dispatch(initializedSuccess())
  });
};

