import React from "react";
import styles from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";
import icon from "../../assets/icons/message-group.png"


export const Navbar = ({children, clearPage, clearMusicSearch, messagesCount}) => {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles["mcd-menu"]}>

          <li>
            <NavLink to="/profile" activeClassName={styles.active}>
              <i src={icon} className="fa fa-home"/>
              <strong>Profile</strong>
              <small>your story</small>
            </NavLink>
          </li>
          <li onClick={clearPage}>
            <NavLink to="/users" activeClassName={styles.active}>
              <i className="fa fa-users"/>
              <strong>Users</strong>
              <small>our developers</small>
            </NavLink>
          </li>

          <li className={styles.dialogs_link}>
            <NavLink to="/dialogs" activeClassName={styles.active}>
              <i className="fa fa-comments-o"/>
              <strong>Dialogs</strong>
              <small>your dialogs</small>
              {messagesCount}
            </NavLink>
          </li>


          <li>
            <NavLink to="/news" activeClassName={styles.active}>
              <i className="fa fa-globe"/>
              <strong>News</strong>
              <small>breaking news</small>
            </NavLink>
          </li>


          <li>
            <NavLink to="/music" activeClassName={styles.active}
              onClick={clearMusicSearch}>
              <i className="fa fa-music"/>
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

