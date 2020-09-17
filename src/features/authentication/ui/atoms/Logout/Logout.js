import React from "react";
import {useDispatch} from "react-redux";
import {authActions} from "@auth/modules/authorization";
import styles from "./Logout.module.scss"

export const Logout = ({isMobile}) =>{

  const dispatch = useDispatch();
  const onLogout = () => dispatch(authActions.logout());

return  <li className={!isMobile || styles.logout} onClick={onLogout}>
  <i className="fa fa-sign-out" aria-hidden="true"/>Logout</li>
};