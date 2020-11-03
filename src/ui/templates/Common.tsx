import {Header} from "@ui/organisms/Header/Header";
import {Navbar} from "@ui/organisms/Navbar/Navbar";
import {Footer} from "@ui/organisms/Footer/Footer";
import React, {FC} from "react";
import classes from "./Common.module.scss"
import {UserAuthInfo} from "@auth";
import {Friends, Search, usersActions} from "@users";
import {useDispatch} from "react-redux";
import {NewMessagesCount} from "@dialogs";

export interface ICommonTemplateProps {
  clearMusicSearch?: () => void
}

export const CommonTemplate: FC<ICommonTemplateProps> = ({children, clearMusicSearch}) => {
  const dispatch = useDispatch();
  const clearPage = (): void => {
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
            <Navbar clearPage={clearPage}
                messagesCount={<NewMessagesCount/>}
                clearMusicSearch={clearMusicSearch}>
              <Friends clearPage={clearPage}/>
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