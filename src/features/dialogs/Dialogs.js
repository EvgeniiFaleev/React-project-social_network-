import React from "react";
import {useAuthRedirect} from "../../utils/useAuthRedirect";
import {Route, Switch} from "react-router";
import {Dialog} from "./ui/molecules/Dialog/Dialog";
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
