import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


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

ReactDOM.render(
  <React.StrictMode>
    <App DialogData={DialogData} respondetsList/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
