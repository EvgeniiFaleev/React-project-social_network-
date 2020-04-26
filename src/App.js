import React, {Component} from "react";
import "./App.scss";
import {BrowserRouter, Route} from "react-router-dom";
// My components
import Nav from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {me} from "./redux/auth-reducer";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";

// ===================================


// ===================================
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if(!this.props.initialized) return <Preloader/>;

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer/>
          <Nav/>
          <div className="app-wrapper-content">
            <Route path={'/profile/:userId?'} render={(props) => {
              return (
                <ProfileContainer
                  key={props.match.params.userId}/>
              )
            }}/>
            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
            <Route path="/news"
              render={(props) => <News {...props}/>}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/users" component={UsersContainer}/>
            <Route path="/login" component={Login}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
let MapStateToProps = (state) =>({
  initialized: state.app.initialized
});
export default connect(MapStateToProps, {initializeApp})(App);