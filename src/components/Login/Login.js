import React from 'react';
import {useSelector} from "react-redux";
import {Redirect} from "react-router";
import {LoginForm} from "./LoginForm/LoginForm";


const Login = () => {
  const {isAuth, captchaUrl} = useSelector((state) => (
    {
      isAuth: state.authUser.user.isAuth,
      captchaUrl: state.authUser.captchaUrl
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

 export default Login;