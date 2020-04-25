import React from "react";
import {Field, reduxForm} from 'redux-form';


let DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field name="newMessageBody"
        placeholder="enter new Message" component='textarea'

      /></div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
};

DialogsForm = reduxForm({form: "DialogsForm"})(DialogsForm);
export default DialogsForm;
