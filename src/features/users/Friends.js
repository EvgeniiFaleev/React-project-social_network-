import React from "react";
import {useSelector} from "react-redux";
import {FriendsBar} from "@users/ui/moleculs/FriendsBar/FriendsBar";



export const Friends = ({clearPage}) => {
  const isMobile = document.documentElement.clientWidth <= 860
  const isAuth = useSelector((state) => state.auth.isAuth);

  return isAuth && !isMobile &&  <FriendsBar clearPage = {clearPage}/>
};