import React from "react";


export const FollowBtn = ({followed, isFollowing, id, onUnFollow, onFollow}) =>{
  return  (
     followed ? (
      <button
        disabled={isFollowing.some((item) => item === id)}
        onClick={() => {
          onUnFollow(id);
        }}>
        Unfollow
      </button>
    ) : (
      <button
        disabled={isFollowing.some((item) => item === id)}
        onClick={() => {
          onFollow(id);
        }}>
        Follow
      </button>
    )
    )
};