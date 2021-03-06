import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Profile/Dialogs/Dialogs";
import { Router, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter></BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <div className="app-content-wrapper">
        <Route component={Profile} />
        <Route component={Dialogs} />
      </div>
    </div>
  );
}

export default App;
