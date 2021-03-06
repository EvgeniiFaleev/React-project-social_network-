import React, {Component} from "react";
import "./App.module.scss";
import {HashRouter} from "react-router-dom";
import {connect, ConnectedProps} from "react-redux";
import {Preloader} from "@ui/index";
import {initActions} from "@auth/modules/initialization/";
import {Routes} from "./Routes";
import {RootState} from "./lib/store/root-reducer";
import {TDispatch} from "@store";

// ===================================
const MapStateToProps = (state: RootState) => (
    {
      initialized: state.init.initialized
    });

const mapDispatchToProps = (dispatch: TDispatch) => {
  return {
    initializeApp: () => dispatch(initActions.initializeApp()),
  }
};
const connector = connect(MapStateToProps, mapDispatchToProps);
type AppProps = ConnectedProps<typeof connector>


class App extends Component<AppProps> {
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


export default connector(App);