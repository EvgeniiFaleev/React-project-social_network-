import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

export default function MyPosts(props) {
  // Convert posts to array with JSX elements
  let posts = props.posts.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} />
  ));
  let area = React.createRef();

  function onPost() {
    props.post();
  }
  function onChange() {
    let text = area.current.value;
    props.change(text);
  }
  return (
    <div className={classes.myPosts}>
      <h3>My wall</h3>
      <div className={classes.area}>
        <textarea
          ref={area}
          onChange={onChange}
          value={props.current}
        ></textarea>
        <button onClick={onPost}>Написать</button>
      </div>
      {posts}
    </div>
  );
}
