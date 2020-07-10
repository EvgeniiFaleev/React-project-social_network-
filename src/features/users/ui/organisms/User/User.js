import React from "react";
import {Link, NavLink} from "react-router-dom";
import {FollowBtn} from "../../atoms/FollowBtn/FollowBtn";
import classes from "./User.module.scss"
import ava_undefined from "../../../../../ui/assets/images/avatar-undefined.jpg"

export const User = ({status,
  isAuth, id, photo, fullName, followed, isFollowing
}) => {
  return (
    <div className={classes.user} key={id}>

      <div className={classes.user_info}>
        <div className={classes.user_photo}>
          <NavLink to={`/profile/${id}`}>
            <img src={photo ||ava_undefined}
              alt="avatar"/>
          </NavLink>
        </div>

        <div><p>{fullName}</p>
          <p className={classes.user_info_status}>{status}</p></div>
      </div>
      <div className={classes.btn_container}>
        {isAuth ?
          <FollowBtn followed={followed} isFollowing={isFollowing}
            id={id}
          /> :
          ""}
        <Link to={`/dialogs/${id}`}>
          <button className={classes.sendMsg_btn}>Send Message
          </button>
        </Link>
      </div>
    </div>
  );

};


