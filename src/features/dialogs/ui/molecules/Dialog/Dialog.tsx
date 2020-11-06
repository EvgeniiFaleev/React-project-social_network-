import React, {FC, ReactNode, useEffect, useRef} from "react";
import {DialogsForm} from "@dialogs/ui/molecules/DialogsForm/DialogsForm";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {dialogsActions} from "@dialogs/modules/dialogs";
import {profileActions} from "@profile/modules/profile";
import {Preloader} from "@ui";
import {Message} from "@dialogs/ui/atoms/Message/Message";
import classes from "./Dialog.module.scss"
import no_avatar from "@images/avatar-undefined.jpg";
import {RootState} from "@store/root-reducer";


export interface IParams {
  id: string
}

export const Dialog: FC = () => {

  const {id} = useParams<IParams>();
  const dispatch = useDispatch();

  const {userName, userPhoto, dialog, authUserId} =
      useSelector((state: RootState) => (
          {
            userPhoto: state.profile!.profile?.photos?.small,
            userName: state.profile.profile?.fullName,
            dialog: state.dialogs!.dialog,
            authUserId: state.auth.user.userId,

          }
      ), shallowEqual);

  const ref = useRef<HTMLDivElement>(null);

  const messages: Array<ReactNode> | undefined = dialog?.map((message, index, arr) => {
    return <Message message={message}

        ref={arr.length - 1 === index ?
            ref :
            null}
        isOwner={message.senderId === authUserId}/>
  });

  const avatar = userPhoto || no_avatar;


  useEffect(() => {

    dispatch(profileActions.getUser(+id));
    const timerId = setInterval(() => {
      dispatch(dialogsActions.getDialog(+id));
    }, 10000);

    return () => {
      clearInterval(timerId);
      dispatch(dialogsActions.setDialog(null));
    }
  }, [id, dispatch]);

  const dialogLength: number | undefined = dialog?.length;

  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView();

  }, [dialogLength]);

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