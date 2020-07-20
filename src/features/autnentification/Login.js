import React from 'react';
import {useSelector} from "react-redux";
import {Redirect} from "react-router";
import {LoginForm} from "./ui/organisms/LoginForm/LoginForm";
import styles from "./Login.module.scss"


export const Login = () => {
  const {isAuth, captchaUrl} = useSelector((state) => (
    {
      isAuth: state.auth.isAuth,
      captchaUrl: state.auth.captchaUrl
    }
  ));

  return isAuth ? <Redirect to={"/profile"}/> :
   (
    <div>
      <h1 className={styles.login_title}>Please, log in...</h1>
      <LoginForm captchaUrl={captchaUrl} />
    </div>
  )
};

