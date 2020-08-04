import React, {Component} from "react";
import "./App.module.scss";
import {BrowserRouter, HashRouter} from "react-router-dom";
// My ui
import {connect} from "react-redux";
import {Preloader} from "./ui";
import {initActions} from "./features/autnentification/modules/initialization/";
import {Routes} from "./Routes";

// ===================================
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader/>;

    return (
      <BrowserRouter>
           <Routes/>
      </BrowserRouter>
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