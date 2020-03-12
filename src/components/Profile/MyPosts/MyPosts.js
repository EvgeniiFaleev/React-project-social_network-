import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

export default function MyPosts(props) {
  // Convert posts to array with JSX elements
  let posts = props.posts.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} />
  ));
  let area = React.createRef();

  function onButton() {
    let value = area.current.value;
    props.addPost();
    props.watch("");
  }
  function change() {
    props.watch(area.current.value);
  }
  return (
    <div className={classes.myPosts}>
      <h3>{props.myPosts_head}</h3>
      <div className={classes.area}>
        <textarea ref={area} onChange={change} value={props.current}></textarea>
        <button onClick={onButton}>Написать</button>
      </div>
      {posts}
    </div>
  );
}
