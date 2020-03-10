import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

export default function MyPosts(props) {
  // Convert posts to array with JSX elements
  debugger;
  let posts = props.posts.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} />
  ));

  return (
    <div className={classes.myPosts}>
      <h3>{props.myPosts_head}</h3>
      <div className={classes.area}>
        <textarea></textarea>
        <button>Написать</button>
      </div>
      {posts}
    </div>
  );
}
