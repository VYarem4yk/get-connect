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

function App() {
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

  let respondetsList = [
    { id: "Katarzyna", name: "Katarzyna" },
    { id: "Igor", name: "Igor" },
    { id: "Roma", name: "Roma" },
    { id: "Alena", name: "Alena" },
    { id: "Artem", name: "Artem" },
    { id: "Natasha", name: "Natasha" },
    { id: "Lesha", name: "Lesha" },
    { id: "Sasha", name: "Sasha" },
  ];

  let DialogData = [
    { id: "1", text: "Хай", owner: "messageYour" },
    { id: "2", text: "Как дела?", owner: "messageRespondent" },
    { id: "3", text: "Нормально, как сам?", owner: "messageYour" },
    { id: "4", text: "Тоже норм", owner: "messageRespondent" },
    { id: "5", text: "Крутяк", owner: "messageYour" },
  ];

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
