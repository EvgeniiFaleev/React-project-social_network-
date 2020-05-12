import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
// import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
  console.log("MAPDIALOG")
  console.log(state)
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
  mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

export default DialogsContainer;
