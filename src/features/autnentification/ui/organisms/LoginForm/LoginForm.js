import React from "react";
import classes from "./LoginForm.module.scss"
import {ErrorMessage, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authActions} from "../../../modules/authorization";


export const LoginForm = ({captchaUrl}) => {

  const {register, errors, setError, handleSubmit} = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    dispatch(authActions.login(formData))
      .then((error) => setError("logError", "notMatch", error));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div><input name='email' onChange={() => console.log(errors)}
        ref={register({
          required: "Please" + " enter your email"
        })}
        placeholder='e-mail'
      />
        <ErrorMessage errors={errors} className={classes.span_error}
          name="email" as="span"/>
      </div>
      <div><input name='password' ref={register({
        required: "Please" + " enter your password"
      })}
        type="password"
        placeholder='password'
      />
        <ErrorMessage errors={errors} className={classes.span_error}
          name="password" as="span"/>
      </div>
      <div><input name='rememberMe' type="checkbox"/>Remember Me
      </div>
      {/*<span className={classes.span_error}></span>*/}
      {captchaUrl ?
        <><img alt="captcha" src={captchaUrl}/>
          <input name='captcha' placeholder='Enter symbols'
            ref={register({
              required: "Please" + " enter symbols"
            })} type="text"/>
          <ErrorMessage errors={errors} className={classes.span_error}
            name="captcha" as="span"/></> :
        ""}
      <div>
        <ErrorMessage errors={errors} className={classes.span_error}
          name="logError" as="p"/>
        <input type="submit"/>
      </div>
    </form>
  )
};
