import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {dialogsActions} from "../../../modules/dialogs";
import {useParams} from "react-router";
import classes from "./DialogsForm.module.scss";

export const DialogsForm = () => {

  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const {id} = useParams();
  const inputMessage = useRef();

  const onSendMessage = async ({message}) => {
    await dispatch(dialogsActions.sendMessage(id, message));
    await dispatch(dialogsActions.getDialog(id));
    inputMessage.current.value = null;
  };

const onResize = (e)=> {
  const el = e.currentTarget;
    setTimeout(function(){
      console.log(el.scrollTop);
      el.style.height = "auto";
      el.style.height = el.scrollHeight +  "px";
    },0);
  if (e.keyCode === 13 && el.value.length > 0) {
    e.preventDefault();
    handleSubmit(onSendMessage)();
    el.value="";
  }
  };


  return (
    <form className={classes.wrapper} name="dialog"  onSubmit={handleSubmit(onSendMessage)}>
      <div><textarea  onKeyDown={onResize} ref={(elem) => {
        register(elem, {
          required: true
        });
        inputMessage.current = elem;
      }} name="message"
        placeholder="Enter new message"
      /></div>
      <div className={classes.button_wrapper}>
        <button>Send</button>
      </div>
    </form>
  )
};


