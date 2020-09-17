import React, {Component} from "react";
import "./App.module.scss";
import {HashRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Preloader} from "./ui";
import {initActions} from "@auth/modules/initialization/";
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