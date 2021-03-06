import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home'
import Game from './components/Game'
import Scores from './components/Scores'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [count1, setCount1] = useState(null);
  const [count2, setCount2] = useState(null);
  const [mode, setMode] = useState("COLORS");
  const [lang, setLang] = useState("ENGLISH");
  const [diff, setDiff] = useState("EASY");

  let getScore = (count1,count2) => {
    setCount1(count1)
    setCount2(count2)
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/game">
            <Game mode={mode} diff={diff} lang={lang} func={getScore} />
          </Route>
          <Route path="/scores">
            <Scores allAttempts={count1} goodAttempts={count2} />
          </Route>
          <Route path="/">
            <Home setDiff={setDiff} setMode={setMode} setLang={setLang} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;