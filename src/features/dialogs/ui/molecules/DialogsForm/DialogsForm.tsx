import React, {FC} from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {dialogsActions} from "@dialogs/modules/dialogs";
import {useParams} from "react-router";
import classes from "./DialogsForm.module.scss";
import {IDialogParams} from "@dialogs/ui/molecules/Dialog/Dialog";

interface IDialogForm {
  message: string
}

export const DialogsForm: FC = () => {

  const {register, handleSubmit} = useForm<IDialogForm>();
  const dispatch = useDispatch();
  const {id} = useParams<IDialogParams>();

  const onSendMessage = async ({message}: IDialogForm) => {
    await dispatch(dialogsActions.sendMessage(+id, message));
    await dispatch(dialogsActions.getDialog(+id));

  };

  const onResize = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const el = e.currentTarget;
    setTimeout(function () {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }, 0);
    if (e.key === "Enter" && el.value.length > 0) {
      e.preventDefault();
      handleSubmit(onSendMessage)();
      el.value = "";
    }
  };


  return (
      <form className={classes.wrapper} name="dialog"
          onSubmit={(e) => {
            handleSubmit(onSendMessage)
          }}>
        <div><textarea onKeyDown={onResize}
            ref={(elem: HTMLTextAreaElement) => {
              register(elem, {
                required: true
              });
            }} name="message"
            placeholder="Enter new message"
        /></div>
        <div className={classes.button_wrapper}>
          <button>Send</button>
        </div>
      </form>
  )
};


