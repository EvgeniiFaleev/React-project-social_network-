import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";
import MyPostsForm from "./MyPostsForm/MyPostsForm";


export default function MyPosts(props) {
  // Convert posts to array with JSX elements

  let posts = props.posts.map((post) => (
    <Post message={post.message} likeCount={post.likeCount}/>
  ));

  function onSubmit(formData) {
    props.post(formData.newMessageBody);
  }

  return (
    <div className={classes.myPosts}>
      <h3>My wall</h3>
      <div className={classes.area}>
        <MyPostsForm  onSubmit={onSubmit}/>
      </div>
      {posts}
    </div>
  );
}
