import React from 'react';
import classes from './Header.module.scss'
import logo
  from "./../../assets/images/logo/Free Watercolor Logos_6.png"
import {TopBarProfileLink} from "../../molecules/TopBarProfileLink";


export const Header = () => {

  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <img className={classes.header_logo} alt="logo"
          src={logo}/>
      <TopBarProfileLink/>
      </div>
     </header>

  );
};