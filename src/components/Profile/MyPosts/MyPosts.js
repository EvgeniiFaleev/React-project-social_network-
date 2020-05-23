import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";
import MyPostsForm from "./MyPostsForm/MyPostsForm";
import {useDispatch, useSelector} from "react-redux";
import {addPostActionCreator} from "../../../redux/profile-reducer";


export default function MyPosts() {

const enterPosts = useSelector((state) => state.ProfilePage.enterPosts);
const dispatch = useDispatch();
   const posts = enterPosts.map((post) => (
    <Post message={post.message} likeCount={post.likeCount}/>
  ));

  function onSubmit(formData) {
    dispatch(addPostActionCreator(formData.newMessageBody));
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
