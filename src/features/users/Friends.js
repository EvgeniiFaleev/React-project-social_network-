import React from "react";
import {useSelector} from "react-redux";
import {FriendsBar} from "./ui/moleculs/FriendsBar/FriendsBar";



export const Friends = ({clearPage}) => {

  const isAuth = useSelector((state) => state.auth.isAuth);

  return isAuth &&  <FriendsBar clearPage = {clearPage}/>
};