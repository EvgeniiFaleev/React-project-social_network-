import Dialogs from "./Dialogs";
import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator
} from "../../redux/redux-store";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    MessagesPage: state.MessagesPage
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage() {
      dispatch(sendMessageActionCreator());
    },
    newMessageChange(e) {
      dispatch(updateNewMessageActionCreator(e.target.value));
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
