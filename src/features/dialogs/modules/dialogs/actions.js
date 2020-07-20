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
export const setNewMessages = (payload) => (
  {
    type: types.SET_NEW_MESSAGES,
    payload
  }
);

export const getNewMessagesCount = () => (dispatch) => {
  dialogsAPI.getNewMessagesCount()
    .then((count) => dispatch(setNewMessages(count)));
};

export const getDialogs = () => (dispatch) => {
  dispatch(initActions.toggleIsFetching(true));
  dialogsAPI.getDialogs()
    .then((dialogs) => {
      const sortedDialogs = dialogs.sort((a, b) => b.newMessagesCount - a.newMessagesCount);
      dispatch(setDialogs(sortedDialogs));
      dispatch(toggleIsFetching(false));
    });
};

export const getDialog = (id) => (dispatch) => {
  return dialogsAPI.getDialog(id)
    .then((dialog) => {
      dispatch(setDialog(dialog))
        return(dialog);
      }
    );
};


export const sendMessage = (userId, message) => async () => {
  await dialogsAPI.startDialog(userId);
  await dialogsAPI.sendMessage(userId, message);
};