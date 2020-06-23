import classes from "./TopBarProfileLink.module.scss";
import {NavLink, useRouteMatch} from "react-router-dom";
import React, {useCallback, useRef, useState} from "react";
import {shallowEqual, useSelector} from "react-redux";
import {Dropdown} from "../atoms/Dropdown/Dropdown";
import dropClass from './../atoms/Dropdown/Dropdown.module.scss'

export const TopBarProfileLink = () => {


  const [isDropped, setDropdown] = useState(false);

  const {user, userPhoto} = useSelector((state) => (
    {
      user: state.auth.user,
      userPhoto: state.profile?.profile?.photos.small
    }
  ), shallowEqual);

  const dropRef =  useRef();
  const userInfoRef = useRef();

  const onCloseDropDown = useCallback((e) => {
    if (!e.target.closest("." + dropClass.dropdown)) {
      setDropdown(false);
      userInfoRef.current.style.background = "";
      dropRef.current.style.opacity = 0;
      dropRef.current.style.visibility ="hidden";
      document.removeEventListener("click",onCloseDropDown);
    }else {document.removeEventListener("click",onCloseDropDown);}
  },[]);

const onDropdown = (e) => {
  // setDropdown(true);
  userInfoRef.current.style.background = "#1e1e1e";
  dropRef.current.style.visibility ="visible";
  dropRef.current.style.opacity = 0.9;
  document.addEventListener("click", onCloseDropDown)
};

  return <>
    {user.id ?
      <div ref={userInfoRef} className={classes.userInfo} onClick={onDropdown}>
        <span
          className={classes.userInfo_name}>{user.login}</span>
        <div className={classes.userInfo_photo}>
          <img alt="user_photo"
          src={userPhoto}/>
        </div>
          <Dropdown isVisible={isDropped} ref={dropRef}/>
      </div> :
      <NavLink className={classes.login_link}
        to={"/login"}>Login</NavLink>}
  </>
};