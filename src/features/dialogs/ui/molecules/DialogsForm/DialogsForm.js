import React from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {dialogsActions} from "../../../modules/dialogs";
import {useParams} from "react-router";


export const DialogsForm = () => {

  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const {id} = useParams();


  const onSendMessage = async ({message}) => {
    await dispatch(dialogsActions.sendMessage(id, message));
    await dispatch(dialogsActions.getDialog(id));
  };

  return (
    <form onSubmit={handleSubmit(onSendMessage)}>
      <div><input ref={register({
        required: true
      })} name="message"
        placeholder="enter new Message"
      /></div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
};


