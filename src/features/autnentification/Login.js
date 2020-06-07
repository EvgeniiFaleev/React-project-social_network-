import React from 'react';
import {useSelector} from "react-redux";
import {Redirect} from "react-router";
import {LoginForm} from "./ui/organisms/LoginForm/LoginForm";


export const Login = () => {
  const {isAuth, captchaUrl} = useSelector((state) => (
    {
      isAuth: state.auth.user.isAuth,
      captchaUrl: state.auth.captchaUrl
    }
  ));

  return isAuth ? <Redirect to={"/profile"}/> :
   (
    <div>
      <h1>Login</h1>
      <LoginForm captchaUrl={captchaUrl} />
    </div>
  )
};

