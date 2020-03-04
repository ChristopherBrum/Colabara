import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        seconds: 30
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
            <div>
                { seconds === 0
                    ? <h1>Busted!</h1>
                    : <h1 class="counter">{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
        )
    }
}