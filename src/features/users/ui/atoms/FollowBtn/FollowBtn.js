import React from "react";
import classes from "./Followbtn.module.scss"
import {usersActions} from "@users/modules/users";
import {useDispatch} from "react-redux";

export const FollowBtn = ({followed, isFollowing, id}) =>{

  const dispatch = useDispatch();

  const onFollow = (id) => {
    dispatch(usersActions.followUser(id));
  };

  const onUnFollow = (id) => {
    dispatch(usersActions.unFollowUser(id));
  };
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