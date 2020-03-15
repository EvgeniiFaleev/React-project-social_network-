import React from "react";
import "./App.scss";
// My components
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
// ===================================
export default App;
// ===================================
function App(props) {
  console.log(props);
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav friends={props.state.friends} />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                state={props.state.ProfilePage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <DialogsContainer
                state={props.state.MessagesPage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}
