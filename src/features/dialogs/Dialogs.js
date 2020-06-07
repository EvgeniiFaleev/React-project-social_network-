import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useAuthRedirect} from "../../utils/useAuthRedirect";
import {dialogsActions} from "./modules/dialogs";
import {Route, Switch} from "react-router";
import {Dialog} from "./ui/organisms/Dialog";
import {DialogsList} from "./ui/organisms/DialogsList";


export const Dialogs = () => {

  useAuthRedirect();


  return (
    <>
      <Switch>
        <Route exact
          path={`/dialogs`}
          component={DialogsList}/>
        <Route
          path={`/dialogs/:id`}
          component={Dialog}/>

      </Switch>
    </>
  );
};
