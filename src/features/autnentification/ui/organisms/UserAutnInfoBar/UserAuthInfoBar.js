import classes from "./UserAuthInfoBar.module.scss";
import React from "react";
import {shallowEqual, useSelector} from "react-redux";
import {Logout} from "../../atoms/Logout/Logout";


export const UserAuthInfoBar = React.forwardRef(({onDropdown, children},
 ref) => {

  const { userName, userPhoto} = useSelector((state) => (
    {
      userName: state.auth.user.fullName,
      userPhoto: state.auth.user.photos?.small
    }
  ), shallowEqual);
  const isMobile = document.documentElement.clientWidth <= 480;
  return <>
    {!isMobile ?
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
      <Logout isMobile={isMobile}/>
      }
  </>
});