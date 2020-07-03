import {Redirect, Route, Switch} from "react-router";
import {ProfilePage} from "./pages/profile";
import {DialogsPage} from "./pages/dialogs";
import {NewsPage} from "./pages/news";
import {MusicPage} from "./pages/music";
import {SettingsPage} from "./pages/settings";
import {UsersPage} from "./pages/users";
import {LoginPage} from "./pages/login";
import React from "react";


export const Routes = () => {
  return <Switch>
    <Route path={'/profile/:userId?'} render={(props) => {
      return (
        <ProfilePage selectedId={props.match.params.userId}/>
      )
    }}/>
    <Route path="/dialogs" component={DialogsPage}/>

    <Route path="/news" component={NewsPage}/>
    <Route path="/music" component={MusicPage}/>
    <Route path="/settings" component={SettingsPage}/>
    <Route path="/users" component={UsersPage}/>
    <Route path="/login" component={LoginPage}/>
    <Redirect exact from="/" to="/profile/"/>
    <Route render={() => (
      <div>404 NOT FOUND</div>
    )}/>
  </Switch>
};