import React from "react";
import classes from "./MyPosts.module.scss";
import {useSelector} from "react-redux";
import Post from "@profile/ui/atoms/Post/Post";
import {MyPostsForm} from "@profile/ui/molecules/MyPostsForm/MyPostsForm";


export const MyPosts = () => {

  const enterPosts = useSelector((state) => state.profile.enterPosts);
  const posts = enterPosts.map((post) => (
    <Post key={post.id} message={post.message} likeCount={post.likeCount}/>
  ));


  return (
    <div className={classes.myPosts}>
      <h3>My wall</h3>
      <div className={classes.area}>
        <MyPostsForm />
      </div>
      {posts}
    </div>
  );
};
