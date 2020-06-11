import classes from "../../Dialogs.module.scss";
import React, {useEffect} from "react";
import {DialogDescription} from "../molecules/DialogDescriprion/DialogDescription";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {dialogsActions} from "../../modules/dialogs";
import {Preloader} from "../../../../ui";


export const DialogsList = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(dialogsActions.getDialogs());
  }, [dispatch]);

  let {dialogs, isFetching} = useSelector((state) => (
    {
      dialogs: state.dialogs.dialogs,
      isFetching: state.init.isFetching
    }
  ), shallowEqual);
  dialogs = dialogs?.map((dialog) => {
    return <DialogDescription key={dialog.id} {...dialog}/>;
  });

  return (
    <>
      {isFetching ?
        <Preloader/> :
        <div className={classes.dialogs_wrapper}>
          {dialogs ?
            dialogs :
            <p>No Dialogs Here</p>}
        </div>}
    </>
  )
};
