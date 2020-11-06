import classes from "./Dropdown.module.scss";
import React from "react";
import {Link, match, useRouteMatch} from "react-router-dom";
import {Logout} from "@auth/ui/atoms/Logout/Logout";

interface IDropdownProps {
  isVisible: boolean
}

export const Dropdown = React.forwardRef<HTMLUListElement, IDropdownProps>(({isVisible}, ref) => {


  const match: match | null = useRouteMatch("/profile");

  return (
      <ul ref={ref} className={classes.dropdown}>
        {match ? null :
            <li>
              <Link to={"/profile"}>
                My profile
              </Link>
            </li>}
        <Logout/>
      </ul>
  )
});