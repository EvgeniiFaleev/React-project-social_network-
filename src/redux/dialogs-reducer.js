const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const SEND_MESSAGE = "SEND_NEW_MESSAGE";
let initialState = {
  enterDialogs: [
    { name: "Jack", id: "1" },
    { name: "Lila", id: "2" },
    { name: "Kirill", id: "3" }
  ],
  enterMessages: [
    { message: "Hello!", id: "1" },
    { message: "Hello Man!", id: "2" },
    { message: "We gonna Die!", id: "3" }
  ],
  current: "Напишите друзьям!"
};
export default function dialogsPageReducer(state = initialState, action) {
  if (action.type === UPDATE_NEW_MESSAGE) {
    state.current = action.value;
  } else if (action.type === SEND_MESSAGE) {
    let newMessage = {
      message: state.current,
      id: 0
    };
    state.enterMessages.push(newMessage);
  }
  return state;
}
