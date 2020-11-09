import classes from "@dialogs/Dialogs.module.scss";
import React, {FC, ReactNode, useEffect} from "react";
import {DialogDescription} from "@dialogs/ui/molecules/DialogDescriprion/DialogDescription";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {dialogsActions} from "@dialogs/modules/dialogs";
import {Preloader} from "@ui";
import {RootState} from "@store/root-reducer";


export const DialogsList: FC = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector((state:RootState) => state.auth.isAuth);

  useEffect(() => {
    if(isAuth) dispatch(dialogsActions.getDialogs());
  }, [dispatch, isAuth]);

  const {dialogs, isFetching} = useSelector((state: RootState) => (
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
