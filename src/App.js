import React from "react";
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


// ===================================
export default App;
// ===================================
function App(props) {
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
          <Route path="/news" render={(props) => <News {...props}/>}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/users" component={UsersContainer}/>
        </div>
      </div>
    </BrowserRouter>
  );
}
