import React from 'react';
import classes from './Header.module.scss'
import {NavLink} from "react-router-dom";


export default function Header(props) {
  return (
    <header className={classes.header}>
      <div className={classes.login_block}>
        {props.user.id ? <div><span
          className={classes.login_name}>{props.user.login}</span>
          <button onClick={props.logout}>Logout</button>
        </div> : <NavLink className={classes.login_link}
          to={"/login"}>Login</NavLink>}</div>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png'/>
    </header>
  );
}