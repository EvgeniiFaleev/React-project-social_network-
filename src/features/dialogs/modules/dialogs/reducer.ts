import * as types from "./types"
import {DialogsItemType, DialogType} from "@socialAPI";
import {DialogsActionType} from "@dialogs/modules/dialogs/actions";

type DialogsStateType = {
  dialogs: Array<DialogsItemType> | null,
  dialog: Array<DialogType> | null,
  newMessages: number
}

const initialState: DialogsStateType = {
  dialogs: null,
  dialog: null,
  newMessages: 0
};

export const reducer = (state = initialState, action: DialogsActionType): DialogsStateType => {
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