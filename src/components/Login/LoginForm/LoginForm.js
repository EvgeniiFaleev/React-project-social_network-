import React from "react";
import {Field, reduxForm} from 'redux-form';
import {
  maxLengthCreator, required
} from "../../../validate/validators";
import {Input} from "../../common/FormsControl";
import classes from "../../common/FormsControl.module.scss"


let maxLength30 = maxLengthCreator(30);

let LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><Field name='email' validate={[required, maxLength30]}
        placeholder='e-mail'
        component={Input}
      />
      </div>
      <div><Field name='password' validate={[required, maxLength30]}
        component={Input} type="password"
        placeholder='password'
      /></div>
      <div><Field name='rememberMe' component='input' type="checkbox"/>
      </div>
      <span className={classes.span_error}>{error}</span>
      {captchaUrl ? <><img alt="captcha" src={captchaUrl}/>
          <Field name='captcha' placeholder='Enter symbols'
            validate={[required]} component='input' type="text"/></> :
        ""}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};
LoginForm = reduxForm({
  form: "login"
})(LoginForm);

export default LoginForm;