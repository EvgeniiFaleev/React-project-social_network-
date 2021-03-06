import {Redirect, Route, Switch} from "react-router";
import {DialogsPage} from "@pages/dialogs";
import {UsersPage} from "@pages/users";
import {LoginPage} from "@pages/login";
import React, {lazy, Suspense} from "react";
import {FriendsPage} from "@pages/friends";
import {SearchPage} from "@pages/search";
import {Preloader} from "@ui";


const NewsPage = lazy(() => import(/* webpackChunkName:
 "news" */ "@pages/news").then(({NewsPage}) => (
  {default: NewsPage}
)));

const MusicPage = lazy(() => import(/* webpackChunkName:
 "music" */ "@pages/music").then(({MusicPage}) => (
  {default: MusicPage}
)));

const ProfilePage = lazy(() => import(/* webpackChunkName:
 "profile" */ "@pages/profile").then(({ProfilePage}) => (
  {default: ProfilePage}
)));

export const Routes = () => {
  return <Suspense fallback={<Preloader/>}>
    <Switch>
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
  </Suspense>
};