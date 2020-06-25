import React from "react";
import classes from "./Followbtn.module.scss"

export const FollowBtn = ({followed, isFollowing, id, onUnFollow, onFollow}) =>{
  return  (
     followed ? (
      <button className={classes.followBtn}
        disabled={isFollowing.some((item) => item === id)}
        onClick={() => {
          onUnFollow(id);
        }}>
        Unfollow
      </button>
    ) : (
      <button  className={classes.followBtn}
        disabled={isFollowing.some((item) => item === id)}
        onClick={() => {
          onFollow(id);
        }}>
        Follow
      </button>
    )
    )
};