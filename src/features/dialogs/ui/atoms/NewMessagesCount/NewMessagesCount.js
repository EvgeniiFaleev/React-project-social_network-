import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {dialogsActions} from "../../../modules/dialogs";
import styles from "./NewMessagesCount.module.scss"


export const NewMessagesCount = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dialogsActions.getNewMessagesCount());
  }, [dispatch]);

  const newMessagesCount = useSelector((state) => state.dialogs.newMessages);

  return( newMessagesCount > 0 ?
      <div className={styles.messages_count}>{newMessagesCount}</div> :
      ""
  )
};
