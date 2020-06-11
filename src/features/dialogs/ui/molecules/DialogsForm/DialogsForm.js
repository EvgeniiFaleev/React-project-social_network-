import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {dialogsActions} from "../../../modules/dialogs";
import {useParams} from "react-router";


export const DialogsForm = () => {

  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const {id} = useParams();
  const inputMessage = useRef();

  const onSendMessage = async ({message}) => {
    await dispatch(dialogsActions.sendMessage(id, message));
    await dispatch(dialogsActions.getDialog(id));
    inputMessage.current.value = null;
    console.log(inputMessage);
  };


  return (
    <form onSubmit={handleSubmit(onSendMessage)}>
      <div><input ref={(elem) => {
        register(elem, {
          required: true
        });
        inputMessage.current = elem;
      }} name="message"
        placeholder="enter new Message"
      /></div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
};


