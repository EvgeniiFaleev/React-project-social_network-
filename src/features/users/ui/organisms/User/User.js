import React from "react";
import {Link, NavLink} from "react-router-dom";
import {FollowBtn} from "../../atoms/FollowBtn/FollowBtn";
import classes from "./User.module.scss"


export const User = ({status,
  isAuth, id, photo, fullName, followed, isFollowing
}) => {
  return (
    <div className={classes.user} key={id}>

      <div className={classes.user_photo}>
        <NavLink to={`/profile/${id}`}>
        <img src={photo ||
        "https://chat.europnet.org/assets/plugins/avatar-undefined.jpg"}
          alt="avatar"/>
      </NavLink>
        <Link to={`/dialogs/${id}`}>
          <button className={classes.sendMsg_btn}>Send Message</button>
        </Link>
      </div>

      <div className={classes.user_info}>
        <p>{fullName}</p>
        <p>{status}</p>
        {isAuth ?
          <FollowBtn followed={followed} isFollowing={isFollowing}
            id={id}
            /> :
          ""}

      </div>

    </div>
  );

};


