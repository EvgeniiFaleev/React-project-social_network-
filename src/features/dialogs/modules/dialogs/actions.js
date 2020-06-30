import * as types from "./types"
import {dialogsAPI} from "../../../../api/api";
import {initActions} from "../../../autnentification/modules/initialization";
import {toggleIsFetching} from "../../../autnentification/modules/initialization/actions";


export const setDialog = (dialog) => (
  {
    type: types.SET_DIALOG,
    dialog
  }
);

export const setDialogs = (dialogs) => (
  {
    type: types.SET_DIALOGS,
    dialogs
  }
);

export const getDialogs = () => (dispatch) => {
  dispatch(initActions.toggleIsFetching(true));
  dialogsAPI.getDialogs()
    .then((dialogs) => {
      dispatch(setDialogs(dialogs));
      dispatch(toggleIsFetching(false));
    });
};

export const getDialog = (id) => (dispatch) => {
  return dialogsAPI.getDialog(id)
    .then((dialog) =>  dispatch(setDialog(dialog)));
};


export const sendMessage = (userId, message) => async () => {
   await dialogsAPI.startDialog(userId);
  await dialogsAPI.sendMessage(userId, message);
};