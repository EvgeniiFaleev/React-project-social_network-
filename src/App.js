import React, {Component, Suspense} from "react";
import "./App.scss";
import {HashRouter, Route} from "react-router-dom";
// My components
import Nav from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import {Redirect, Switch} from "react-router";
import Profile from "./components/Profile/Profile";


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
      <HashRouter>
        <div className="app-wrapper">
          <HeaderContainer/>
          <Nav/>
          <Suspense fallback={<Preloader/>}>
            <div className="app-wrapper-content">
              <Switch>

                <Route path={'/profile/:userId?'} render={(props) => {
                  return (
                    <Profile
                      key={props.match.params.userId} selectedId={props.match.params.userId}/>
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
                <Redirect exact from="/" to="/profile/" />
                <Route path="*" render={()=>(<div>404 NOT FOUND</div>)}/>

              </Switch>
            </div>
          </Suspense>
        </div>
      </HashRouter>
    );
  }
}

let MapStateToProps = (state) => (
  {
    initialized: state.app.initialized
  }
);
export default connect(MapStateToProps, {initializeApp})(App);