import React, {Component, Suspense} from "react";
import "./App.scss";
import {HashRouter, Route} from "react-router-dom";
// My components
import Nav from "./components/Navbar/Navbar";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/preloader/Preloader";
import {Redirect, Switch} from "react-router";
import {Profile} from "./components/Profile/Profile";
import {Users} from "./components/Users/Users";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Header} from "./components/Header/Header";


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
          <Header/>
          <Nav/>
          <Suspense fallback={<Preloader/>}>
            <div className="app-wrapper-content">
              <Switch>

                <Route path={'/profile/:userId?'} render={(props) => {
                  return (
                    <Profile selectedId={props.match.params.userId}/>
                  )
                }}/>
                <Route path="/dialogs"
                  component={Dialogs}/>
                <Route path="/news"
                  component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/users" component={Users}/>
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