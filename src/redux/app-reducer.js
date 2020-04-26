import {me} from "./auth-reducer";


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initialized: false

};
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;

  }
}
// ==========Action Creators======================
export const initializedSuccess = () => (
  {
    type: INITIALIZED_SUCCESS
  }
);
// =====================Thunk Creators====================

export const initializeApp = () => (dispatch) => {
  dispatch(me(true)).then(() => {
    dispatch(initializedSuccess())});
};
