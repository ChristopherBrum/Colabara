import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home'
import AboutUs from './Game'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
          <Link className="l1" to="/">Home</Link>
          <Link className="l2" to="/about_us">About us</Link>
        </div>
        <Switch>
          <Route path="/about_us">
            <AboutUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
