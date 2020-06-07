import * as types from "./types"


const initialState = {
  dialogs: null,
  dialog: null,
  enterDialogs: [{
    name: "Jack",
    id: "1"
  }, {
    name: "Lila",
    id: "2"
  }, {
    name: "Kirill",
    id: "3"
  }],
  enterMessages: [{
    message: "Hello!",
    id: "1"
  }, {
    message: "Hello Man!",
    id: "2"
  }, {
    message: "We gonna Die!",
    id: "3"
  }],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_MESSAGE:
      return {
        ...state,
        enterMessages: [...state.enterMessages, {
          message: action.newMessageBody,
          id: 0
        }]
      };
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
    default:
      return state;
  }
};