import * as types from "./types"


const initialState = {
  dialogs: null,
  dialog: null,
  newMessages: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SET_DIALOGS :
      return {
        ...state,
        dialogs: action.dialogs
      };
    case types.SET_DIALOG :
      return {
        ...state,
        dialog: action.dialog
      };
      case types.SET_NEW_MESSAGES :
      return {
        ...state,
        newMessages: action.payload
      };
    default:
      return state;
  }
};