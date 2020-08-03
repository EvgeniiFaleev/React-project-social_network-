import React, {useEffect, useRef, useState} from "react";
import {DialogsForm} from "../DialogsForm/DialogsForm";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {dialogsActions} from "../../../modules/dialogs";
import {profileActions} from "../../../../profile/modules/profile";
import {Preloader} from "../../../../../ui";
import {Message} from "../../atoms/Message/Message";
import classes from "./Dialog.module.scss"
import no_avatar
  from "../../../../../ui/assets/images/avatar-undefined.jpg";
import msgClasses from "../../atoms/Message/Message.module.scss"


export const Dialog = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const [renderCount, setCount] = useState(0);

  const {userName, userPhoto, dialog, authUserId} = useSelector((state) => (
    {
      userPhoto: state.profile.profile?.photos.small,
      userName: state.profile.profile?.fullName,
      dialog: state.dialogs.dialog,
      authUserId: state.auth.user.userId,

    }
  ), shallowEqual);

  const ref = useRef();

  const messages = dialog?.map((message, index, arr) => {
    return <Message message={message}

      ref={arr.length - 1 === index ?
        ref :
        null}
      isOwner={message.senderId === authUserId}/>
  });

  const avatar = userPhoto || no_avatar;


  useEffect(() => {

    dispatch(profileActions.getUser(id));
    const timerId = setInterval(() => {
      dispatch(dialogsActions.getDialog(id));
    }, 10000);

    return () => {
      clearInterval(timerId);
      dispatch(dialogsActions.setDialog(null));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView();

    if (renderCount > 1) {
      if(ref.current.classList.contains(msgClasses.owner)){
        ref.current.classList.add(classes.new_owner);
      } else{
        ref.current.classList.add(classes.new_other)
      }
    }
    setCount((prevState) => prevState + 1);
  }, [dialog?.length]);

  return (
    <>
      {dialog ?
        <div className={classes.dialog_container}>
          <div className={classes.userInfo}>
            <img src={avatar} alt="avatar"/>
            <span>{userName}</span>
          </div>
          <div className={classes.dialog}>
            {messages}
          </div>
          <DialogsForm/>
        </div> :
        <Preloader/>}
    </>
  );
};