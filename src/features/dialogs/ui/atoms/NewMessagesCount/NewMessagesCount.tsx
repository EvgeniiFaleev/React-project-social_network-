import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {dialogsActions} from "@dialogs/modules/dialogs";
import styles from "./NewMessagesCount.module.scss"
import {RootState} from "@store/root-reducer";


export const NewMessagesCount: FC = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  useEffect(() => {
   if (isAuth) dispatch(dialogsActions.getNewMessagesCount());
  }, [dispatch, isAuth]);

  const newMessagesCount: number = useSelector((state: RootState) => state.dialogs.newMessages);

  return (newMessagesCount > 0 ?
          <div
              className={styles.messages_count}>{newMessagesCount}</div> :
          null
  )
};
