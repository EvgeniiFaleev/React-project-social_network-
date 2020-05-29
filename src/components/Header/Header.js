import React from 'react';
import classes from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/auth-reducer";


export const Header = () => {
  const user = useSelector((state) => state.authUser.user);
  const dispatch = useDispatch();
  return (
    <header className={classes.header}>
      <div className={classes.login_block}>
        {user.id ?
          <div><span
            className={classes.login_name}>{user.login}</span>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </div> :
          <NavLink className={classes.login_link}
            to={"/login"}>Login</NavLink>}</div>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png'/>
    </header>
  );
}