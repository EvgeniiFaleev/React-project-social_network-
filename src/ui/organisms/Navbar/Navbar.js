import React from "react";
import classes from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";


export const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <img className={classes.icon} src="https://img.icons8.com/nolan/64/user.png"/>
        <NavLink to="/profile/" activeClassName={classes.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <img className={classes.icon} src="https://img.icons8.com/nolan/64/conference.png"/>
        <NavLink to="/users" activeClassName={classes.activeLink}>
          Users
        </NavLink>
      </div>
      <div className={classes.item}>
        <img className={classes.icon} src="https://img.icons8.com/nolan/64/message-group.png"/>
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <img className={classes.icon} src="https://img.icons8.com/nolan/64/google-news.png"/>
        <NavLink to="/news" activeClassName={classes.activeLink}>
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <img className={classes.icon} src="https://img.icons8.com/nolan/64/music-record.png"/>
        <NavLink to="/music" activeClassName={classes.activeLink}>
          Music
        </NavLink>
      </div>
    </nav>
  );
}
