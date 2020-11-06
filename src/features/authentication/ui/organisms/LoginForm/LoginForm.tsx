import React, {FC} from "react";
import classes from "./LoginForm.module.scss"
import {ErrorMessage, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authActions} from "@auth/modules/authorization";
import {LoginInfoType} from "@api/socialAPI";
import {TDispatch} from "@store/index";

interface ILoginFormProps {
  captchaUrl: string | null
}


export const LoginForm: FC<ILoginFormProps> = ({captchaUrl}) => {

  const {register, errors, setError, handleSubmit} = useForm<LoginInfoType>();
  const dispatch: TDispatch = useDispatch();

  const onSubmit = (formData: LoginInfoType) => {
    dispatch(authActions.login(formData))
        .then((error) => {
          if (error) setError("logError", "notMatch", error)
        });
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div><input name='email' className={classes.common_input}
            onChange={() => console.log(errors)}
            ref={register({
              required: "Please  enter your email"
            })}
            placeholder='e-mail'
        />
          <ErrorMessage errors={errors} className={classes.span_error}
              name="email" as="span"/>
        </div>
        <div><input name='password' className={classes.common_input}
            ref={register({
              required: "Please enter your password"
            })}
            type="password"
            placeholder='password'
        />
          <ErrorMessage errors={errors} className={classes.span_error}
              name="password" as="span"/>
        </div>
        <div>
          <input name='rememberMe' className={classes.rememberMe}
              type="checkbox"/>
          <label htmlFor="rememberMe"
              className={classes.rememberMe_label}>Remember Me</label>
        </div>
        {captchaUrl ?
            <><img alt="captcha" src={captchaUrl}/>
              <input name='captcha' className={classes.common_input}
                  placeholder='Enter symbols'
                  ref={register({
                    required: "Please enter symbols"
                  })} type="text"/>
              <ErrorMessage errors={errors}
                  className={classes.span_error}
                  name="captcha" as="span"/>
                  </> :
            ""}
        <div>
          <ErrorMessage errors={errors} className={classes.span_error}
              name="logError" as="p"/>
          <input
              className={classes.common_input + " " + classes.send_btn}
              value={"Login"} type="submit"/>
        </div>
      </form>
  )
};