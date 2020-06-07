import * as  types from "./types"
import * as authActions from "../authorization/actions";
// ==========Action Creators======================

export const initializedSuccess = () => (
  {
    type: types.INITIALIZED_SUCCESS
  }
);
// =====================Thunk Creators====================

export const initializeApp = () => (dispatch) => {
  return  dispatch(authActions.me(true)).then(() => {
    dispatch(initializedSuccess())});
};
export const toggleIsFetching = (isFetching) => (
  {
    type: types.TOGGLE_IS_FETCHING,
    isFetching
  }
);
