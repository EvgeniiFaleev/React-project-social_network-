import {Header} from "../organisms/Header/Header";
import {Navbar} from "../organisms/Navbar/Navbar";
import React from "react";
import classes from "./Common.module.scss"
import {Footer} from "../organisms/Footer/Footer";
import {UserAuthInfo} from "../../features/autnentification/";
import {Friends} from "../../features/users/Friends";
import {useDispatch} from "react-redux";
import {usersActions} from "../../features/users/modules/users";
import {Search} from "../../features/users";



export const CommonTemplate = ({children}) => {
  const dispatch = useDispatch();
  const clearPage = () => {
    dispatch(usersActions.setCurrentPage(1));
  };
  return (
      <>
      <Header>
        <Search/>
        <UserAuthInfo/>
      </Header>
      <div className={classes.app_wrapper}>
        <div className={classes.content_wrapper}>
          <Navbar clearPage = {clearPage}>
            <Friends clearPage = {clearPage}/>
          </Navbar>
          <main className={classes.app_content}>
            {children}
          </main>
        </div>
        <Footer/>
      </div>
    </>
  )
};