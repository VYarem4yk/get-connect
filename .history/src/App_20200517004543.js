import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Profile/Dialogs/Dialogs";
import Music from "./components/Profile/Music/Music";
import News from "./components/Profile/News/News";
import Settings from "./components/Profile/Settings/Settings";
import { Route, BrowserRouter } from "react-router-dom";

function App(props) {
  let PostData = [
    {
      id: "5",
      postText: `Weeekend!!! Pizza and BEER!=)`,
      likes: "100500",
    },
    {
      id: "4",
      postText: `My wife ask me to write APP which would count Child Gender and thats it : https://vyarem4yk.github.io/child-gender/ `,
      likes: "6",
    },
    {
      id: "3",
      postText:
        "My first React-App Calculator: https://vyarem4yk.github.io/Calculator-01/",
      likes: "5",
    },
    { id: "2", postText: "I've just started to learn React", likes: "20" },
    { id: "1", postText: "This is my first post!", likes: "15" },
  ];

  let respondetsList 
  let DialogData

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-content-wrapper">
          <Route
            path="/profile"
            render={() => <Profile PostData={PostData} />}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                DialogData={DialogData}
                respondetsList={respondetsList}
              />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
