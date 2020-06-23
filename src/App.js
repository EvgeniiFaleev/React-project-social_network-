import React, {Component} from "react";
import "./App.module.scss";
import {HashRouter, Route} from "react-router-dom";
// My ui
import {connect} from "react-redux";
import {Redirect, Switch} from "react-router";
import {UsersPage} from "./pages/users";
import {ProfilePage} from "./pages/profile";
import {LoginPage} from "./pages/login";
import {NewsPage} from "./pages/news";
import {DialogsPage} from "./pages/dialogs";
import {MusicPage} from "./pages/music";
import {SettingsPage} from "./pages/settings";
import {Preloader} from "./ui";
import {initActions} from "./features/autnentification/modules/initialization/";
import classes from "./App.module.scss"

// ===================================
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) return <Preloader/>;

    return (
      <HashRouter>
              <Switch>
                <Route path={'/profile/:userId?'} render={(props) => {
                  return (
                    <ProfilePage selectedId={props.match.params.userId}/>
                  )
                }}/>
                <Route   path="/dialogs" component={DialogsPage}/>

                <Route path="/news" component={NewsPage}/>
                <Route path="/music" component={MusicPage}/>
                <Route path="/settings" component={SettingsPage}/>
                <Route path="/users" component={UsersPage}/>
                <Route path="/login" component={LoginPage}/>
                <Redirect exact from="/" to="/profile/" />
                <Route  render={()=>(<div>404 NOT FOUND</div>)}/>
              </Switch>
      </HashRouter>
    );
  }
}

const MapStateToProps = (state) => (
  {
    initialized: state.init.initialized
  });

const mapDispatchToProps = dispatch => {
  return {
    initializeApp: () => dispatch(initActions.initializeApp()),
  }
};
export default connect(MapStateToProps, mapDispatchToProps)(App);