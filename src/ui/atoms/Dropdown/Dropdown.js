import classes from "./Dropdown.module.scss";
import React from "react";
import {authActions} from "../../../features/autnentification/modules/authorization";
import {useDispatch} from "react-redux";
import {Link, useRouteMatch} from "react-router-dom";


export const Dropdown = React.forwardRef(({isVisible}, ref) => {
  const match = useRouteMatch("/profile");
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authActions.logout());
  return (
    <ul ref ={ref} className={classes.dropdown}>
      { !match && <li><Link to={"/profile"}>
        My profile
      </Link></li>}
      <li className={classes.dropdown_logout} onClick={onLogout}>Logout</li>
    </ul>
    // <>
    //   {
    //     isVisible && <ul ref ={ref} className={classes.dropdown}>
    //       { !match && <li><Link to={"/profile"}>
    //         My profile
    //       </Link></li>}
    //     <li className={classes.dropdown_logout} onClick={onLogout}>Logout</li>
    //   </ul>
    //   }
    // </>
  )
});