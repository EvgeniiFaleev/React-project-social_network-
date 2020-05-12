import React, {Component, Suspense} from "react";
import "./App.scss";
import {BrowserRouter, Route} from "react-router-dom";
// My components
import Nav from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import {Switch} from "react-router";


const Settings = React.lazy(() => import("./components/Settings/Settings"));
const Music = React.lazy(() => import("./components/Music/Music"));
const News = React.lazy(() => import("./components/News/News"));
const Login = React.lazy(() => import("./components/Login/Login"));
// ===================================


// ===================================
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) return <Preloader/>;

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer/>
          <Nav/>
          <Suspense fallback={<Preloader/>}>
            <div className="app-wrapper-content">
              <Route path={'/profile/:userId?'} render={(props) => {
                return (
                  <ProfileContainer
                    key={props.match.params.userId}/>
                )
              }}/>
              <Route path="/dialogs"
                render={() => <DialogsContainer/>}/>
              <Route path="/news"
                component={News}/>
              <Route path="/music" component={Music}/>
              <Route path="/settings" component={Settings}/>
              <Route path="/users" component={UsersContainer}/>
              <Route path="/login" component={Login}/>
            </div>
          </Suspense>
        </div>
      </BrowserRouter>
    );
  }
}

let MapStateToProps = (state) => (
  {
    initialized: state.app.initialized
  }
);
export default connect(MapStateToProps, {initializeApp})(App);