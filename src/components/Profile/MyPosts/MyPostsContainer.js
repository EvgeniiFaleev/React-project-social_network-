import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let MapStateToProps = (state) => {
  return {
    posts: state.ProfilePage.enterPosts,
    current: state.ProfilePage.current
  };
};
let MapDispatchToProps = (dispatch) => {
  return {
    post() {
      dispatch(addPostActionCreator());
    },
    change(text) {
      dispatch(updateNewPostActionCreator(text));
    }
  };
};
const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);

export default MyPostsContainer;
