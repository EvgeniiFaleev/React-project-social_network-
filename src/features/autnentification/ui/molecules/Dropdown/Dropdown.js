import classes from "./Dropdown.module.scss";
import React from "react";
import {authActions} from "../../../modules/authorization";
import {useDispatch} from "react-redux";
import {Link, useRouteMatch} from "react-router-dom";
import {Logout} from "../../atoms/Logout/Logout";


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