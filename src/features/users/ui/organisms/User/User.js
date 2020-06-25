import React from "react";
import {NavLink} from "react-router-dom";
import {FollowBtn} from "../../atoms/FollowBtn/FollowBtn";
import classes from "./User.module.scss"


export const User = ({status,
  isAuth, id, photo, fullName, followed, isFollowing, onUnFollow, onFollow
}) => {
  return (
    <div className={classes.user} key={id}>

      <div className={classes.user_photo}>
        <NavLink to={`/profile/${id}`}>
        <img src={photo ||
        "https://chat.europnet.org/assets/plugins/avatar-undefined.jpg"}
          alt="avatar"/>
      </NavLink>
      </div>

      <div className={classes.user_info}>
        <p>{fullName}</p>
        <p>{status}</p>
        {isAuth ?
          <FollowBtn followed={followed} isFollowing={isFollowing}
            id={id}
            onFollow={onFollow} onUnFollow={onUnFollow}/> :
          ""}
      </div>

    </div>
  );

};


