import React from 'react';
import LoginForm from "./LoginForm/LoginForm"
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";


let Login = ({login, isAuth,captchaUrl}) => {
  const onSubmit = (formData) => {
    // console.log(formData);я
    login(formData);
  };
  return isAuth ? <Redirect to={"/profile"}/> :
   (
    <div>
      <h1>Login</h1>
      <LoginForm captchaUrl={captchaUrl}  onSubmit={onSubmit}/>
    </div>
  )
};
let MapStateToProps = (state) =>({
  isAuth: state.authUser.user.isAuth,
  captchaUrl: state.authUser.captchaUrl
});
export default connect(MapStateToProps,{login})(Login);