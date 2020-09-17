import classes from "./Dropdown.module.scss";
import React from "react";
import {Link, useRouteMatch} from "react-router-dom";
import {Logout} from "@auth/ui/atoms/Logout/Logout";


export const Dropdown = React.forwardRef(({isVisible}, ref) => {


  const match = useRouteMatch("/profile");

  return (
    <ul ref ={ref} className={classes.dropdown}>
      { !match && <li><Link to={"/profile"}>
        My profile
      </Link></li>}
      <Logout/>
    </ul>
  )
});