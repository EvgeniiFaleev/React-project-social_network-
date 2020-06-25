import {Header} from "../organisms/Header/Header";
import {Navbar} from "../organisms/Navbar/Navbar";
import React from "react";
import classes from "./Common.module.scss"
import {Footer} from "../organisms/Footer/Footer";


export const CommonTemplate = ({children}) => {
  return (
    <>
      <Header/>
      <div className={classes.app_wrapper}>
        <div className={classes.content_wrapper}>
          <Navbar/>
          <main className={classes.app_content}>
            {children}
          </main>
        </div>
        <Footer/>
      </div>
    </>
  )
};