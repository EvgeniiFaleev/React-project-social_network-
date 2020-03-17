import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "../../../redux/state";
import StoreContext from "../../../StoreContext";

export default function MyPostsContainer(props) {
  // Convert posts to array with JSX elements

  // function post() {
  //   props.dispatch(addPostActionCreator());
  // }
  // function change(text) {
  //   props.dispatch(updateNewPostActionCreator(text));
  // }
  return (
    <StoreContext.Consumer>
      {(store) => {
        // Context===================
        function change(text) {
          store.dispatch(updateNewPostActionCreator(text));
        }
        function post() {
          store.dispatch(addPostActionCreator());
        }
        return (
          // <MyPosts
          //   change={change}
          //   posts={props.posts}
          //   current={props.current}
          //   post={post}
          // />
          // =========Using Context Api=======================
          <MyPosts
            change={change}
            posts={store.getState().ProfilePage.enterPosts}
            current={store.getState().ProfilePage.current}
            post={post}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}
