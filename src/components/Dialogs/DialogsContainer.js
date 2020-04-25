import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
// import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
  return {
    MessagesPage: state.MessagesPage
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage(newMessageBody) {
      dispatch(sendMessageActionCreator(newMessageBody));
    },
  };
};

const DialogsContainer = compose(connect(mapStateToProps,
  mapDispatchToProps)
  // withAuthRedirect
)(Dialogs);

export default DialogsContainer;
