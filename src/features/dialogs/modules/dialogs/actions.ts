import * as types from "./types"
import {dialogsAPI, DialogsItemType, DialogType} from "@api/socialAPI";
import {initActions} from "@auth/modules/initialization";
import {AppThunkType, TDispatch} from "@store";
import {Action} from "redux";

interface SetDialogActionType extends Action<typeof types.SET_DIALOG>{
  dialog: Array<DialogType>
}

export const setDialog = (dialog: Array<DialogType>): SetDialogActionType => (
    {
      type: types.SET_DIALOG,
      dialog
    }
);
interface SetDialogsActionType extends Action<typeof types.SET_DIALOGS> {
  dialogs: Array<DialogsItemType>
}

export const setDialogs = (dialogs: Array<DialogsItemType>): SetDialogsActionType => (
    {
      type: types.SET_DIALOGS,
      dialogs
    }
);

interface SetNewMessagesActionType  extends Action<typeof types.SET_NEW_MESSAGES> {
  payload: number
}

export  type DialogsActionType =
    SetDialogActionType
    | SetNewMessagesActionType
    | SetDialogsActionType

export const setNewMessages = (payload: number): SetNewMessagesActionType => (
    {
      type: types.SET_NEW_MESSAGES,
      payload
    }
);

export const getNewMessagesCount = (): AppThunkType => (dispatch: TDispatch) => {
  dialogsAPI.getNewMessagesCount()
      .then((count) => {
        if (count) dispatch(setNewMessages(count))
      });
};

export const getDialogs = (): AppThunkType => (dispatch: TDispatch) => {
  dispatch(initActions.toggleIsFetching(true));
  dialogsAPI.getDialogs()
      .then((dialogs) => {
        if (dialogs && dialogs.length > 0) {
          const sortedDialogs: Array<DialogsItemType> =
              dialogs.sort((a, b) => b.newMessagesCount - a.newMessagesCount);
          dispatch(setDialogs(sortedDialogs));
          dispatch(initActions.toggleIsFetching(false));
        }
      });
};

export const getDialog = (id: number): AppThunkType<Promise<Array<DialogType>>> =>
    (dispatch: TDispatch) => {
  return dialogsAPI.getDialog(id)
      .then((dialog) => {
            debugger
            dispatch(setDialog(dialog));
            return dialog;
          }
      );
};


export const sendMessage = (userId: number, message: string):
    AppThunkType<Promise<void>> => async () => {
  await dialogsAPI.startDialog(userId);
  await dialogsAPI.sendMessage(userId, message);
};