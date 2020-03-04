import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home'
import Game from './components/Game'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("COLORS");
  const [lang, setLang] = useState("ENGLISH");
  const [diff, setDiff] = useState("EASY")

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/game">
            <Game mode={mode} diff={diff} lang={lang} />
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