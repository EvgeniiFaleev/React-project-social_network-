import classes from "@dialogs/Dialogs.module.scss";
import React, {FC, ReactNode, useEffect} from "react";
import {DialogDescription} from "@dialogs/ui/molecules/DialogDescriprion/DialogDescription";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {dialogsActions} from "@dialogs/modules/dialogs";
import {Preloader} from "@ui";
import {RootState} from "@store/root-reducer";
import {DialogsItemType} from "@socialAPI";


export const DialogsList: FC = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(dialogsActions.getDialogs());
  }, [dispatch]);

  let {dialogs, isFetching}: {
    dialogs: Array<DialogsItemType> | null
    isFetching: boolean
  } = useSelector((state: RootState) => (
      {
        dialogs: state.dialogs.dialogs,
        isFetching: state.init.isFetching
      }
  ), shallowEqual);


  let dialogsElems: Array<ReactNode> | null = null;

  if (dialogs) {
    dialogsElems = dialogs?.map((dialog) => {
      return <DialogDescription key={dialog.id} {...dialog}/>;
    });
  }


  return (
      <>
        {isFetching ?
            <Preloader/> :
            <div className={classes.dialogs_wrapper}>
              {dialogs ?
                  dialogsElems :
                  <p>No Dialogs Here</p>}
            </div>}
      </>
  )
};
