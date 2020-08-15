import {Redirect, Route, Switch} from "react-router";
// import {ProfilePage} from "./pages/profile";
import {DialogsPage} from "./pages/dialogs";
import {NewsPage} from "./pages/news";
import {MusicPage} from "./pages/music";
import {UsersPage} from "./pages/users";
import {LoginPage} from "./pages/login";
import React from "react";
import {FriendsPage} from "./pages/friends";
import {SearchPage} from "./pages/search";
import loadable from '@loadable/component'


const ProfilePage = loadable(() => import( /* webpackChunkName:
 "profile" */'./pages/profile'), {
  resolveComponent: (components) => components.ProfilePage,
});


export const Routes = () => {
  return <Switch>
    <Route path={'/profile/:userId?'}>
      <ProfilePage/>
    </Route>
    <Route path="/dialogs">
      <DialogsPage/>
    </Route>
    <Route path="/news">
      <NewsPage/>
    </Route>
    <Route path="/music">
      <MusicPage/>
    </Route>
    <Route path="/users/">
      <UsersPage/>
    </Route>
    <Route path="/friends">
      <FriendsPage/>
    </Route>
    <Route path="/search/:term?">
      <SearchPage/>
    </Route>
    <Route path="/login">
      <LoginPage/>
    </Route>
    <Redirect exact from="/" to="/profile/"/>
    <Route render={() => (
      <div>404 NOT FOUND</div>
    )}/>
  </Switch>
};