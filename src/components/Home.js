import React, {useState} from 'react'
import { Link } from "react-router-dom";

function Home(props){


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
                      <button className="innerButton" onClick ={() =>props.setDiff("EASY")} >EASY</button>
                      <button className="innerButton" onClick ={() =>props.setDiff("MEDIUM")}>MEDIUM</button>
                      <button className="innerButton" onClick ={() =>props.setDiff("HARD")}>HARD</button>              
                    </div>
                    
                    <div>            
                      <button className="innerButton" onClick ={() =>props.setMode("COLORS")} >COLORS</button>
                      <button className="innerButton" onClick ={() =>props.setMode("WORDS")}>WORDS</button>
                      <button className="innerButton" onClick ={() =>props.setMode("MIXED")}>MIXED</button>              
                    </div>
                    
                    <div>            
                      <button className="innerButton" onClick ={() =>props.setLang("ENGLISH")} >ENGLISH</button>
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
