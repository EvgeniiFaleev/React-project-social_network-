import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "../../../redux/state";

export default function MyPostsContainer(props) {
  // Convert posts to array with JSX elements

  function post() {
    props.dispatch(addPostActionCreator());
  }
  function change(text) {
    props.dispatch(updateNewPostActionCreator(text));
  }
  return (
    <MyPosts
      change={change}
      posts={props.posts}
      current={props.current}
      post={post}
    />
  );
}
