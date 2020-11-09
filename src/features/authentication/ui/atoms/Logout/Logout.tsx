import React, {FC} from "react";
import {useDispatch} from "react-redux";
import {authActions} from "@auth/modules/authorization";
import styles from "./Logout.module.scss"
import {TDispatch} from "@store/index";

interface ILogoutProps {
  isMobile: boolean
}

export const Logout: FC<ILogoutProps> = ({isMobile}) => {

  const dispatch: TDispatch = useDispatch();
  const onLogout = (): Promise<void> => dispatch(authActions.logout());

  return <li className={(isMobile ? "" : styles.logout)}
      onClick={onLogout}>
    <i className="fa fa-sign-out" aria-hidden="true"/>Logout</li>
};