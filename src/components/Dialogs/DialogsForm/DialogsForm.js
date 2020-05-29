import React from "react";
import {sendMessageActionCreator} from "../../../redux/dialogs-reducer";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";


export const DialogsForm = () => {

  const {register,errors, handleSubmit} = useForm();
  const dispatch=useDispatch();
  let onSendMessage = (formData) => {
    dispatch(sendMessageActionCreator(formData.newMessageBody));
  };

  return (
    <form onSubmit={ handleSubmit(onSendMessage)}>
      <div><input ref={register({
        required: true
      })} name="newMessageBody"
        placeholder="enter new Message"
        onChange={()=>console.log(errors)}
      /></div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
};


