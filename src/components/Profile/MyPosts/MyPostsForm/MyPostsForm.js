import React from "react";
import {Field, reduxForm} from "redux-form";


let MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component='textarea' name="newMessageBody"
        placeholder='Enter your message'/>
      <button>Написать</button>
    </form>
  )
};

MyPostsForm = reduxForm({form: 'M yPosts'})(MyPostsForm);

export default MyPostsForm;