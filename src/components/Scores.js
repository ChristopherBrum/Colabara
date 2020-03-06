import React from 'react';
import './Scores.css';
import { Link } from "react-router-dom";

export default function Scores(props){
    return(
        <div className="main-scores-container">
            <div className="scores-container">
                <div className="container-left">
                    <h1 className="score-title">YOUR SCORE</h1>
                </div>
                <div className="container-right">
                    <h1 className="hi-score-title">HI-SCORES</h1>
                </div>      
            </div>
            <div className="home-button-div">
                <Link to="/">
                    <button className="home-button">HOME</button>
                </Link>
            </div>
        </div>
    )
}