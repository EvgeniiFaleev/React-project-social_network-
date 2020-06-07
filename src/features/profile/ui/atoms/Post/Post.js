import React from "react";
import classes from "./Post.module.scss";

export default function Posts(props) {
  return (
    <div className={classes.post}>
      <div className={classes.item}>
        <img alt="avatar"
          className={classes.ava}
          src="https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg"
        />
        <p className="message">{props.message}</p>
        <p>
          <span className="likeCount">{props.likeCount}</span>
        </p>
      </div>
    </div>
  );
}
