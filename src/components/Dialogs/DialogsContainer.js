import Dialogs from "./Dialogs";
import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator
} from "../../redux/state";
import StoreContext from "../../StoreContext";

export default function DialogsContainer(props) {
  // function sendMessage() {
  //   props.dispatch(sendMessageActionCreator());
  // }
  // function newMessageChange(e) {
  //   props.dispatch(updateNewMessageActionCreator(e.target.value));
  // }
  return (
    <StoreContext.Consumer>
      {(store) => {
        // Using Context========================
        function sendMessage() {
          store.dispatch(sendMessageActionCreator());
        }
        function newMessageChange(e) {
          store.dispatch(updateNewMessageActionCreator(e.target.value));
        }
        return (
          <Dialogs
            sendMessage={sendMessage}
            newMessageChange={newMessageChange}
            state={store.getState().MessagesPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}
