import React from "react";
import {ErrorMessage, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import classes
  from "../../../../autnentification/ui/organisms/LoginForm/LoginForm.module.scss";
import {profileActions} from "../../../modules/profile";


export const MyPostsForm = () => {

  const {register, handleSubmit, errors} = useForm();
  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    dispatch(profileActions.addPostActionCreator(formData.newMessageBody));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea ref={register({required: "Empty Field"})} name="newMessageBody"
        placeholder='Enter your message'/>
      <ErrorMessage errors={errors} className={classes.span_error}
        name="newMessageBody" as="span"/>

      <button>Написать</button>
    </form>
  )
};


