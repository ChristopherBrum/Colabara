import React, { Component } from 'react'
import './Game.css'
import { Redirect } from 'react-router-dom'

export default class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            seconds: this.timeLength()
        }
    }

    timeLength(){       
        let timing
        if (this.props.diff === "EASY"){
            timing = 60
        } else if (this.props.diff === "MEDIUM"){
            timing = 45
        } else if (this.props.diff === "HARD"){
            timing = 30
        }
        return timing
    }

    componentDidMount() {
  
        this.myInterval = setInterval(() => {
            const { seconds } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
        }, 1000)
    }

    render() {
        const { seconds } = this.state
        return (
            <div className="counter-container">
                { seconds === 0
                    ? <Redirect to='/scores' />
                    : <h1 className="counter">{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
        )
    }
}