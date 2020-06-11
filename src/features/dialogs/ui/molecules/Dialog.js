import React, {useEffect} from "react";
import {DialogsForm} from "./DialogsForm/DialogsForm";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {dialogsActions} from "../../modules/dialogs";
import {profileActions} from "../../../profile/modules/profile";
import {Preloader} from "../../../../ui";


export const Dialog = () => {

  const {id} = useParams();
  const dispatch = useDispatch();

  const {userName, userPhoto, dialog} = useSelector((state) => (
    {
      userPhoto: state.profile.profile?.photos.small,
      userName: state.profile.profile?.fullName,
      dialog: state.dialogs.dialog
    }
  ), shallowEqual);
  const messages = dialog?.map((message) => {
    return <div className="{classes.message}" key={message.id}>
      <p>{message.body}</p>
      <p>{message.addedAt}</p>
    </div>
  });
  const avatar = userPhoto ||
    "https://chat.europnet.org/assets/plugins/avatar-undefined.jpg";
  useEffect(() => {
    dispatch(profileActions.getUser(id));
    const timerId = setInterval(() => {
      dispatch(dialogsActions.getDialog(id));
    }, 1000);
    return () => {
      clearInterval(timerId);
      dispatch(dialogsActions.setDialog(null));
    }
  }, [id, dispatch]);


  return (
    <>
      {dialog ?
        <div className="dialog_container">
          <div className="userInfo">
            <img src={avatar} alt="avatar"/><span>{userName}</span>
          </div>
          <div className="dialog">{messages}</div>
          <DialogsForm/>
        </div> :
        <Preloader/>}
    </>
  );
};