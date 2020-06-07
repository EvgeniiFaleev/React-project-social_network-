import classes from "../../Dialogs.module.scss";
import React, {useEffect} from "react";
import {DialogDescription} from "../molecules/DialogDescriprion/DialogDescription";
import {useDispatch, useSelector} from "react-redux";
import {dialogsActions} from "../../modules/dialogs";


export const DialogsList = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(dialogsActions.getDialogs());
  }, [dispatch]);

  let dialogs = useSelector((state) => state.dialogs.dialogs);
  dialogs = dialogs?.map((dialog) => {
    return <DialogDescription key={dialog.id} {...dialog}/>;
  });

  return (
    <div className={classes.dialogs_wrapper}>
      {dialogs ?
        dialogs :
        <p>No Dialogs Here</p>}
    </div>
  )
};
