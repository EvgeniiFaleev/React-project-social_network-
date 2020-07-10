import React from "react";
import styles from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";
import icon from "../../assets/icons/message-group.png"


export const Navbar = ({children, clearPage}) => {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles["mcd-menu"]}>

          <li>
            <NavLink to="/profile" activeClassName={styles.active}>
              <i src={icon} className="fa fa-home"></i>
              <strong>Profile</strong>
              <small>your story</small>
            </NavLink>
          </li>
          <li onClick={clearPage}>
            <NavLink to="/users"  activeClassName={styles.active}>
              <i className="fa fa-users"></i>
              <strong>Users</strong>
              <small>our developers</small>
            </NavLink>
          </li>

          <li>
            <NavLink to="/dialogs" activeClassName={styles.active}>
              <i className="fa fa-comments-o"></i>
              <strong>Dialogs</strong>
              <small>your dialogs</small>
            </NavLink>
          </li>


          <li>
            <NavLink to="/news" activeClassName={styles.active}>
              <i className="fa fa-globe"></i>
              <strong>News</strong>
              <small>breaking news</small>
            </NavLink>
          </li>


          <li>
            <NavLink to="/music" activeClassName={styles.active}>
              <i className="fa fa-music"></i>
              <strong>Music</strong>
              <small>deezer chart</small>
            </NavLink>

          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

