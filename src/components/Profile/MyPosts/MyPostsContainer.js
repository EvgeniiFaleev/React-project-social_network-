import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "../../../redux/profile-reducer";

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
