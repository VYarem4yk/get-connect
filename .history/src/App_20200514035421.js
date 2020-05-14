import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Profile/Dialogs/Dialogs";
import { Router } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <div className="app-content-wrapper">
        <Route <Dialogs />/>
        <Route />
        {/*  <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
