import React from "react";
import {Field, reduxForm} from 'redux-form';
import { maxLengthCreator,
  required
} from "../../../validate/validators";
import { Input} from "../../common/FormsControl";


let maxLength10 = maxLengthCreator(10);

let LoginForm = (props) => {
  const {handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit}>
      <div><Field name='email' validate={[required,maxLength10]} placeholder='e-mail'
        component={Input}
      />
      </div>
      <div><Field name='password' validate={[required, maxLength10]}
        component={Input} type="text"
        placeholder='password'
      /></div>
      <div><Field name='rememberMe' component='input' type="checkbox"/>
      </div>
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