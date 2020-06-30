import classes from "./UserAuthInfoBar.module.scss";
import {NavLink} from "react-router-dom";
import React from "react";
import {shallowEqual, useSelector} from "react-redux";


export const UserAuthInfoBar = React.forwardRef(({onDropdown, children},
 ref) => {

  const {isAuth, userName, userPhoto} = useSelector((state) => (
    {
      isAuth: state.auth.isAuth,
      userName: state.auth.user.fullName,
      userPhoto: state.auth.user.photos.small
    }
  ), shallowEqual);

  return <>
    {isAuth ?
      <div ref={ref} className={classes.userInfo}
        onClick={onDropdown}>
        <span
          className={classes.userInfo_name}>{userName}</span>
        <div className={classes.userInfo_photo}>
          <img alt="user_photo"
            src={userPhoto}/>
        </div>
        {children}
      </div> :
      <NavLink className={classes.login_link}
        to={"/login"}>Login</NavLink>}
  </>
});