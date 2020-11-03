import React, {FC} from "react";
import {useAuthRedirect} from "@auth/hooks/useAuthRedirect";
import {Route, Switch} from "react-router";
import {Dialog} from "@dialogs/ui/molecules/Dialog/Dialog";
import {DialogsList} from "@dialogs/ui/organisms/DialogsList";


export const Dialogs: FC = () => {

  useAuthRedirect();


  return (

      <Switch>
        <Route exact path={`/dialogs`}>
          <DialogsList/>
        </Route>
        <Route path={`/dialogs/:id`}>
          <Dialog/>
        </Route>
      </Switch>

  );
};
