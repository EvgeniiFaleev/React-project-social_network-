const SEND_MESSAGE = "SEND_NEW_MESSAGE";
export const initialState = {
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
export default function dialogsPageReducer(state = initialState,
  action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        enterMessages: [...state.enterMessages, {
          message: action.newMessageBody,
          id: 0
        }]
      };
    default:
      return state;
  }
};


export const sendMessageActionCreator = (newMessageBody) => (
  {
    type: SEND_MESSAGE,
    newMessageBody
  }
);
