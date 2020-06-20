import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navigation from "./components/Navigation/Navigation";
import DialogsContainer from "./components/Profile/Dialogs/DialogsContainer";
import Music from "./components/Profile/Music/Music";
import Settings from "./components/Profile/Settings/Settings";
import { Route, BrowserRouter } from "react-router-dom";
import UsersContainer from "./components/Profile/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Loign";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navigation />
        <div className="app-content-wrapper">
          <Route path="/login<Login/>
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
