import React from "react";
import {useAuthRedirect} from "@auth/hooks/useAuthRedirect";
import {Route, Switch} from "react-router";
import {Dialog} from "@dialogs/ui/molecules/Dialog/Dialog";
import {DialogsList} from "@dialogs/ui/organisms/DialogsList";


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
