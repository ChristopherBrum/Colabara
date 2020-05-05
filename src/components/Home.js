import React, {useState} from 'react'
import { Link } from "react-router-dom";
import cobraWhite from "./cobrawhite.png";

function Home(props){
  const [showOptions, setShowOptions] = useState(false)

    return (
    <div className="container">
      <div className="title-container">
        <p className="sub-title">WELCOME TO</p>
        <div className="title-div">
          <h1 className="title">COLABRA</h1>
          <img className="cobra-logo" src={cobraWhite} alt="Colabra Cobra Mascot"></img>
        </div>
        <h4 className="tag-title">A RETRO-FUTURISTIC GAME OF WORDS & COLORS</h4>
      </div>
      <div className= "sub-container">
        <div className="btn-container">
          <button className="scores" onClick ={() => setShowOptions(!showOptions)}>OPTIONS</button>
            {showOptions && <div>
              <div className="btn-container-inner">            
                <button className="innerButton" onClick ={() =>props.setDiff("EASY")} >EASY</button>
                <button className="innerButton" onClick ={() =>props.setDiff("MEDIUM")}>MEDIUM</button>
                <button className="innerButton" onClick ={() =>props.setDiff("HARD")}>HARD</button>              
              </div>
              <div className="btn-container-inner">            
                <button className="innerButton" onClick ={() =>props.setMode("COLORS")} >COLORS</button>
                <button className="innerButton" onClick ={() =>props.setMode("WORDS")}>WORDS</button>
                <button className="innerButton" onClick ={() =>props.setMode("MIXED")}>MIXED</button>              
              </div>
              <div className="btn-container-inner">            
                <button className="innerButton" onClick ={() =>props.setLang("ENGLISH")}>ENGLISH</button>
                <button className="innerButton" onClick ={() =>props.setLang("SPANISH")}>SPANISH</button>
                <button className="innerButton" onClick ={() =>props.setLang("MIXED")}>MIXED</button>              
              </div>
          </div>}
          <div>
            <Link to="/scores">
              <button className="scores">SCORES</button>
            </Link>
          </div>
          <div>
            <Link to="/game">  
              <button className="start">START</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;
