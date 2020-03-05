import React from 'react'
import './Game.css'
import Timer from './Timer.js'

function indexAnswer() {
  return (Math.floor(Math.random()*4))
}

class Game extends React.Component {
  constructor(props){
    super(props)

    let AnsColor = this.randomWordColor()
    let randomColors = [this.randomWordColor(),this.randomWordColor(),this.randomWordColor(),this.randomWordColor()]
    randomColors[indexAnswer()]= AnsColor

    this.state = {
      phrase: this.randomPhrase(),
      word: this.randomWord(),
      color: AnsColor,
      answers: randomColors,
      count: 0
    }

  }


  // EASY/MEDIUM/HARD COLOR CHANGE LEVELS

    colorDiff(){
      let levelDiff 
      if (this.props.diff === "MEDIUM"){
          return this.changePhraseColor()
      } else if (this.props.diff === "HARD"){
          return
      } else {
        return this.state.phrase
      }
    }

    changePhraseColor(){
      let colorfulPhrases = this.randomPhrase()
      colorfulPhrases.split(" ").map( word => {return <span style={{ color: this.randomWordColor() }}>{`${word} `}</span>;
      })
    }

  // INCREMENT COUNTER 

  increment() {
    this.setState({ count: this.state.count + 1
    });
  };

  // EASY REFRESH OF PHRASE/WORD/WORD-COLOR

  randomPhrase(){
    const phrases =   ["The car is", 
                      "Today, the sky was", 
                      "My favorite color is", 
                      "It looks like that orange is actually", 
                      "The painter used a lot of", 
                      "I liked the bedroom before they painted it", 
                      "Thanks, this is the first time I painted my nails", 
                      "Your shoes are really really", 
                      "You don't often see people who's hair is", 
                      "I think it would look better in", 
                      "Today feels like a good day for", 
                      "I dont think chicken is supposed to be"]
    if (this.props.diff === "MEDIUM"){
      return phrases[Math.floor(Math.random() * phrases.length)].split(" ").map((phraseWord) => 
        <p className="med-diff-phrase" style={{ color: this.randomWordColor() }}> {phraseWord} </p>
      );
    } else {
      return phrases[Math.floor(Math.random() * phrases.length)]
    }
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
    let AnsColor = this.randomWordColor()
    let randomColors = [this.randomWordColor(),this.randomWordColor(),this.randomWordColor(),this.randomWordColor()]
    randomColors[indexAnswer()]= AnsColor

    this.setState({
      phrase: this.randomPhrase(),
      word: this.randomWord(),
      color: AnsColor,
      answers: randomColors,
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <Timer diff={this.props.diff} />
        <div className="phrase-container">
          <p className="phrase">{this.state.phrase} <span className={this.state.color}>{this.state.word}</span>.</p>
        </div>

        <div className="game-box">
          <div className="answer-container">
            <div>
              <button className="answer-button-one">{this.state.answers[0]}</button>
            </div>
            <div>
              <button className="answer-button-two">{this.state.answers[1]}</button>
            </div>
            <div>
              <button className="answer-button-two">{this.state.answers[2]}</button>
            </div>
            <div>
              <button className="answer-button-two">{this.state.answers[3]}</button>
            </div>
          </div>
          <div>
            <button className="next-button" onClick={() => this.changeEverything()} >next</button>
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
