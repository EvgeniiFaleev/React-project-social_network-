import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../../redux/profile-reducer";


let MapStateToProps = (state) => {
  return {
    posts: state.ProfilePage.enterPosts
  };
};
let MapDispatchToProps = (dispatch) => {
  return {
    post(newMessageBody) {
      dispatch(addPostActionCreator(newMessageBody));
    },
  };
};
const MyPostsContainer = connect(MapStateToProps,
  MapDispatchToProps)(
  MyPosts);

export default MyPostsContainer;
