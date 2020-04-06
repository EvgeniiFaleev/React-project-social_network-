import React from 'react';
import classes from './Header.module.scss'


export default function Header(props) {
  return (
    <header className={classes.header}>
      <div className={classes.login_block}>{props.user.id ?
        props.user.login :
        "Login"}</div>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png'/>
    </header>
  );
}