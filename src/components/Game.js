import React from 'react'
import './Game.css'
import Timer from './Timer.js'

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      phrase: this.randomPhrase(),
      word: this.randomWord(),
      color: this.randomWordColor(),
      count: 0
    }
  }

  increment() {
    this.setState({ count: this.state.count + 1
    });
  };

  randomPhrase(){
    const phrases = ["The car is", "Today, the sky was", "My favorite color is", "It looks like that orange is actually", "The painter used a lot of", "I liked the bedroom before they painted it", "Thanks, this is the first time I painted my nails", "Your shoes are really really", "You don't often see people who's hair is", "I think it would look better in", "Today feels like a good day for", "I dont think chicken is supposed to be"]
    return phrases[Math.floor(Math.random() * phrases.length)]
  }

  randomWord(){
    const colors = ["red", "yellow", "blue", "green", "orange", "purple", "pink", "brown", "gray"]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  randomWordColor(){
    const fontColor = ["red", "yellow", "blue", "green", "orange", "purple", "pink", "brown", "gray"]
    let changeFont = fontColor[Math.floor(Math.random() * fontColor.length)]
    return changeFont;
  }

  changeEverything(){
    this.setState({
      phrase: this.randomPhrase(),
      word: this.randomWord(),
      color: this.randomWordColor()
    })
  }

  render() {
    return (
      <div>
        <Timer diff={this.props.diff} />
        <div>
          <p className="phrase">{this.state.phrase} <span className={this.state.color}>{this.state.word}</span>.</p>
        </div>
        <div className="game-box">
          <div className="answer-container">
            <div>
              <button className="answer-button-one">Answer1</button>
            </div>
            <div>
              <button className="answer-button-two">Answer2</button>
            </div>
          </div>
          <div>
            <button className="next-button" onClick={() => this.changeEverything()} onClick={() => this.increment()}>next</button>
          </div>
        </div>
        <div>
          <p className="attempts">Attempts {this.state.count}</p>
        </div>
      </div>
    )
  }
}

export default Game
