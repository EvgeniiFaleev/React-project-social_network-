import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {
  sendMessageActionCreator, updateNewMessageActionCreator
} from "../../redux/dialogs-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
  return {
    MessagesPage: state.MessagesPage
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage() {
      dispatch(sendMessageActionCreator());
    }, newMessageChange(e) {
      dispatch(updateNewMessageActionCreator(e.target.value));
    }
  };
};

const DialogsContainer = connect(mapStateToProps,
  mapDispatchToProps)(
  withAuthRedirect(Dialogs));

export default DialogsContainer;
