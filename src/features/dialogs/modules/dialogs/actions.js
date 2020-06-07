import * as types from "./types"
import {dialogsAPI} from "../../../../api/api";


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
  dialogsAPI.getDialogs()
    .then((dialogs) => dispatch(setDialogs(dialogs)));
};

export const getDialog = (id) => (dispatch) => {
  dialogsAPI.getDialog(id)
    .then((dialog) =>  dispatch(setDialog(dialog)));
};


export const sendMessage = (userId, message) => async (dispatch) => {
   await dialogsAPI.startDialog(userId);
  await dialogsAPI.sendMessage(userId, message);
};