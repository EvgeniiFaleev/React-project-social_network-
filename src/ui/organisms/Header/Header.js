import React from 'react';
import classes from './Header.module.scss'
import logo
  from "./../../assets/images/logo/Free Watercolor Logos_6.png"
import {UserAuthInfo} from "../../../features/autnentification/UserAuthInfo";


export const Header = ({children}) => {

  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <img className={classes.header_logo} alt="logo"
          src={logo}/>
     {children}
      </div>
     </header>

  );
};