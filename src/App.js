import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div class="container">
      <div class="title-container">
        <h1 class="title">Colabras</h1>
      </div>
      <div class="menu-container">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            GAME MODE
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button">WORDS</button>
            <button class="dropdown-item" type="button">COLORS</button>
            <button class="dropdown-item" type="button">WORDS & COLORS</button>
          </div>
        </div>
        <div class="scores">
          <button>SCORES</button>
        </div>
        <div class="start">
          <button>START</button>
        </div>
      </div>
    </div>
  );
}

export default App;
