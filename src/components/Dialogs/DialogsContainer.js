import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator
} from "../../redux/dialogs-reducer";

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
