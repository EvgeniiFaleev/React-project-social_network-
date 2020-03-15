import Dialogs from "./Dialogs";
import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator
} from "../../redux/state";

export default function DialogsContainer(props) {
  function sendMessage() {
    props.dispatch(sendMessageActionCreator());
  }
  function newMessageChange(e) {
    props.dispatch(updateNewMessageActionCreator(e.target.value));
  }
  return (
    <Dialogs
      sendMessage={sendMessage}
      newMessageChange={newMessageChange}
      state={props.state}
    />
  );
}
