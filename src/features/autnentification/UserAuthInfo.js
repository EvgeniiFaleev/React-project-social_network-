import React, {useCallback, useRef, useState} from "react";
import {Dropdown} from "./ui/molecules/Dropdown/Dropdown";
import {UserAuthInfoBar} from "./ui/organisms/UserAutnInfoBar/UserAuthInfoBar";
import dropClass from "./ui/molecules/Dropdown/Dropdown.module.scss";


export const UserAuthInfo = () => {

  const [isDropped, setDropdown] = useState(false);

  const userInfoRef = useRef();
  const dropRef = useRef();

  const onDropdown = (e) => {
    userInfoRef.current.style.background = "#1e1e1e";
    dropRef.current.style.visibility = "visible";
    dropRef.current.style.opacity = 0.9;
    document.addEventListener("click", onCloseDropDown)
  };


  const onCloseDropDown = useCallback((e) => {
    if (!e.target.closest("." + dropClass.dropdown)) {
      setDropdown(false);
      userInfoRef.current.style.background = "";
      dropRef.current.style.opacity = 0;
      dropRef.current.style.visibility = "hidden";
      document.removeEventListener("click", onCloseDropDown);
    } else {document.removeEventListener("click", onCloseDropDown);}
  }, []);


  return (
    <UserAuthInfoBar ref={userInfoRef} onDropdown={onDropdown}>
      <Dropdown isVisible={isDropped} ref={dropRef}/>
    </UserAuthInfoBar>
  )
};