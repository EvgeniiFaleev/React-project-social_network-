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
import {Routes} from "./Routes";

// ===================================
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) return <Preloader/>;

    return (
      <HashRouter>
           <Routes/>
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