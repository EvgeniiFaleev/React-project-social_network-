import React, {Component} from "react";
import "./App.scss";
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
import {CommonTemplate, Preloader} from "./ui";
import {initActions} from "./features/autnentification/modules/initialization/";
import {useAuthRedirect} from "./utils/useAuthRedirect";
import {Dialog} from "./features/dialogs/ui/organisms/Dialog";


// ===================================
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) return <Preloader/>;

    return (
      <HashRouter>
        <div className="app-wrapper">
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
        </div>
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