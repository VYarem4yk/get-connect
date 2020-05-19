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
  let { PostData, curentPostText } = props.state.profilePage;
  let { respondetsList, DialogData } = props.state.dialogsPage;
  let { friends } = props.state;
  let { addPost, textPostChange } = props;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation friends={friends} />
        <div className="app-content-wrapper">
          <Route
            path="/profile"
            render={() => (
              <Profile
                PostData={PostData}
                addPost={addPost}
                textPostChange={textPostChange}
                curentPostText={curentPostText}
              />
            )}
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
