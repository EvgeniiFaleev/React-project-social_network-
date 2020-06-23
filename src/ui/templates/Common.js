import {Header} from "../organisms/Header/Header";
import {Navbar} from "../organisms/Navbar/Navbar";
import React from "react";
import classes from "./Common.module.scss"


export const CommonTemplate = ({children}) => {
  return (
    <>
      <Header/>
      <div className={classes.main_wrapper}><Navbar/>
        <div className={classes.app_content}>
          {children}
        </div>
      </div>
    </>
  )
};