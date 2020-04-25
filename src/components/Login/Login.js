import React from 'react';
import LoginForm from "./LoginForm/LoginForm"
import {authAPI} from "../../api/api";


let Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    authAPI.auth(formData).then((response)=> console.log(response));
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit}/>
    </div>
  )
};

export default Login;