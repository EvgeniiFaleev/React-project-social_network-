import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

export default function MyPosts(props) {
  return (
    <div className={classes.myPosts}>
      <h3>{props.myPosts_head}</h3>
      <div className={classes.area}>
        <textarea></textarea>
        <button>Написать</button>
      </div>
      <Post message="Привет, как дела?" likeCount="2 лайка" />
      <Post message="Не умри от коронавируса, друг" likeCount="5 лайков" />
    </div>
  );
}
