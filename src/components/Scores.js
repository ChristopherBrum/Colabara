import React from 'react';
import './Scores.css';
import { Link } from "react-router-dom";

function calcScore(){
    if (this.props.diff === "EASY"){

    } else if (this.props.diff === "MEDIUM"){

    } else if (this.props.diff === "HARD"){

    }
}

function hiScores(){

}

export default function Scores(props){

    return(

        <div className="main-scores-container">
            <div className="scores-container">
                <div className="container-left">
                    <h1 className="score-title">YOUR SCORE</h1>
                    <div className="scores-info">
                        <h4 className="score-description">CORRECT / ATTEMPTS: </h4>
                        <h3>{props.goodAttempts} / {props.allAttempts}</h3>
                        <h4 className="score-description">ACCURACY: </h4>
                        <h3> 85%</h3>
                        <h4 className="score-description">SCORE: </h4>
                        <h3>12550</h3>
                        <div className="submit-initials-container">
                            <form className="">
                                <label className="score-description">
                                    ENTER INITIALS:
                                    <input className="initials-text-box" type="text" name="name" />
                                </label>
                                <div className="submit-initials-container">
                                    <input className="submit-initials-button" type="submit" value="SUBMIT" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container-right">
                    <h1 className="hi-score-title">HI-SCORES</h1>
                    <div>

                    </div>
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