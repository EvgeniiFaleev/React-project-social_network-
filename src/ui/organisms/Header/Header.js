import React from 'react';
import classes from './Header.module.scss'
import logo
  from "@images/logo/Free Watercolor Logos_6.png"


export const Header = ({children}) => {

  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <div className={classes.logo_wrapper} >
          <img className={classes.header_logo} alt="logo"
          src={logo}/>
          {children[0]}
        </div>
     {children[1]}
      </div>
     </header>

  );
};