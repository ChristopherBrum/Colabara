import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup'


function App() {

  const [mode, setMode] = useState("COLORS");
  const [lang, setLang] = useState("ENGLISH");
  const [diff, setDiff] = useState("EASY")

  const [showOptions, setShowOptions] = useState(false)

  return (
    
    <div className="container">
            
            <div className="title-container">
              <h5 className="sub-title">WELCOME TO</h5>
              <h1 className="title">COLABRAS</h1>
              <h4 className="tag-title">A RETRO-FUTURISTIC GAME OF WORDS & COLORS</h4>
            </div>
                 
        <div className= "sub-container">


            <div>
              <button className="scores" onClick ={() => setShowOptions(!showOptions)}>OPTIONS</button>
                {showOptions && <div>
                    
                    <div>            
                      <button className="innerButton" onClick ={() =>setDiff("EASY")} >EASY</button>
                      <button className="innerButton" onClick ={() =>setDiff("MEDIUM")}>MEDIUM</button>
                      <button className="innerButton" onClick ={() =>setDiff("HARD")}>HARD</button>              
                    </div>
                    
                    <div>            
                      <button className="innerButton" onClick ={() =>setMode("COLORS")} >COLORS</button>
                      <button className="innerButton" onClick ={() =>setMode("WORDS")}>WORDS</button>
                      <button className="innerButton" onClick ={() =>setMode("MIXED")}>MIXED</button>              
                    </div>
                    
                    <div>            
                      <button className="innerButton" onClick ={() =>setLang("ENGLISH")} >ENGLISH</button>
                      <button className="innerButton" onClick ={() =>setLang("SPANISH")}>SPANISH</button>
                      <button className="innerButton" onClick ={() =>setLang("MIXED")}>MIXED</button>              
                    </div>
                    
                </div>}
       

                <div>
                  <button className="scores">SCORES</button>
                </div>

                <div>
                  <button className="start">START</button>
                </div>

            </div>
           
        </div>
    </div>
  );
}

export default App;





                {/* <div className="sub-container">
                        <div className="menu-container">
                              <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  GAME MODE
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                  <button className="dropdown-item" type="button">WORDS</button>
                                  <button className="dropdown-item" type="button">COLORS</button>
                                  <button className="dropdown-item" type="button">WORDS & COLORS</button>
                                </div>
                              </div>*/}

            // <ButtonGroup toggle size="sm" >
            //   <ToggleButton  type="radio" name="radio" defaultChecked value="1" className="scores">
            //       COLORS
            //     </ToggleButton>

            //     <ToggleButton type="radio" name="radio" value="2">
            //       WORDS
            //     </ToggleButton>

            //     <ToggleButton type="radio" name="radio" value="3">
            //       MIXED
            //     </ToggleButton>
            // </ButtonGroup>