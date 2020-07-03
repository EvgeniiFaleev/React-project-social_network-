import React from "react";
import styles from "./Navbar.module.scss";
import {Link, NavLink} from "react-router-dom";
import icon from "../../assets/icons/message-group.png"


export const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles["mcd-menu"]}>

            <li>
              <NavLink to="/profile" activeClassName={styles.active}>
                <i src={icon} className={styles["fa fa-home"]}></i>
                <strong>Profile</strong>
                <small>your story</small>
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName={styles.active}>
                <i className={styles["fa fa-edit"]}></i>
                <strong>Users</strong>
                <small>our developers</small>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dialogs" activeClassName={styles.active}>
                <i className={styles["fa fa-gift"]}></i>
                <strong>Dialogs</strong>
                <small>your dialogs</small>
              </NavLink>
            </li>


            <li>
              <NavLink to="/news" activeClassName={styles.active}>
                <i className={styles["fa fa-globe"]}></i>
                <strong>News</strong>
                <small>breaking news</small>
              </NavLink>
            </li>


            <li>
              <NavLink to="/music" activeClassName={styles.active}>
                <i className={styles["fa fa-comments-o"]}></i>
                <strong>Music</strong>
                <small>deezer chart</small>
              </NavLink>

            </li>


        </ul>
      </nav>
    </div>
  );
};

