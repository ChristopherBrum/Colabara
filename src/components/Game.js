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
    let buttonColors = [this.randomWord(),this.randomWordColor(),this.randomWordColor(),this.randomWordColor()]
    buttonColors[indexAnswer()]= AnsColor

    this.state = {
      phrase: this.randomPhrase(),
      word: this.randomWord(),
      color: AnsColor,
      answers: buttonColors,
      count: 0,
      countAns: 0,
      colorSelected: null
    }
  }

  randomWord(){
    const colors = ["red", "yellow", "blue", "green", "orange", "purple", "pink", "brown", "gray"]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  randomWordColor(){
    const fontColor = ["red", "yellow", "blue", "green", "orange", "purple", "pink", "brown", "gray"]
    return fontColor[Math.floor(Math.random() * fontColor.length)]

  }
  colorChosen(color) {
    console.log("clicked: ", color)
       this.setState({ colorSelected: color })
    }

  changeEverything(){
        let score = this.state.countAns
        let questionCount = this.state.count
    if (this.state.colorSelected === this.state.color){
      score ++
    }

    let AnsColor = this.randomWordColor()
    let buttonColors = [this.randomWordColor(),this.randomWordColor(),this.randomWordColor(),this.randomWordColor()]
    console.log("respuesta: ", AnsColor)
    // console.log("elegido: ", this.state.colorSelected)
   
       
    buttonColors[indexAnswer()]= AnsColor

    this.setState({
      phrase: this.randomPhrase(),
      word: this.randomWord(),
      color: AnsColor,
      answers: buttonColors,
      count: this.state.count + 1,
      countAns: score 
    })
  }
          // SEND SCORE FUNCTION

    sendScore = () => {
      this.props.func(this.state.count, this.state.countAns)
    }

           // INCREMENT COUNTER 

    increment() {
      this.setState({ count: this.state.count + 1
      });
    };
    incrementAns() {
      this.setState({ countAns: this.state.count + 1
      });
    }; 

  // EASY/MEDIUM/HARD COLOR CHANGE LEVELS

    colorDiff(){
      let levelDiff 
      if (this.props.diff === "MEDIUM"){
        return this.changePhraseColor()
      } else if (this.props.diff === "HARD"){

        return this.changePhraseColor()
      } 
      return this.state.phrase
    }

    changePhraseColor(){
      let colorfulPhrases = this.randomPhrase()
      colorfulPhrases.split(" ").map( word => {return <span style={{ color: this.randomWordColor() }}>{{word}}</span>;
      })
    }

  // EASY REFRESH OF PHRASE/WORD/WORD-COLOR

  randomPhrase(){
    const phrases =   ["The car is", 
                      "Today, the sky was", 
                      "My favorite color is", 
                      "It looks like that orange is actually", 
                      "The painter used a lot of", 
                      "I liked it better before they painted it", 
                      "I think my nails look good painted", 
                      "Your shoes are really really", 
                      "You don't often see people who's hair is", 
                      "I think it would look better in", 
                      "Today feels like a good day for", 
                      "I dont think chicken is supposed to be",
                      "Your bicycle is",
                      "The flowers are quite",
                      "You look great in"]

    if (this.props.diff === "MEDIUM"){
      return phrases[Math.floor(Math.random() * phrases.length)].split(" ").map((phraseWord) => 
        <p className="med-diff-phrase" style={{ color: this.randomWordColor() }}> {phraseWord} </p> );
    } else if (this.props.diff === "HARD"){      
      return phrases[Math.floor(Math.random() * phrases.length)].split(" ").map((phraseWord) => 
        <p className="med-diff-phrase" style={{ color: this.randomWordColor() }}> {phraseWord} </p> );
    } else {
      return phrases[Math.floor(Math.random() * phrases.length)]
    }
  }

  render() {
    return (
      <div>
        <div className="phrase-container">
          <p className="phrase">{this.state.phrase} <span className={this.state.color}>{this.state.word}</span>.</p>
        </div>

        <div className="game-box">
          <div className="answer-container">
            <div>

              <button style={this.props.diff === "HARD" ? {color: this.randomWordColor()} : {}} className="answer-button" onClick={() => this.colorChosen(this.state.answers[0])} >{this.state.answers[0]}</button>
            </div>
            <div>
              <button style={this.props.diff === "HARD" ? {color: this.randomWordColor()} : {}} className="answer-button" onClick={() => this.colorChosen(this.state.answers[1])} >{this.state.answers[1]}</button>
            </div>
            <div>
              <button style={this.props.diff === "HARD" ? {color: this.randomWordColor()} : {}} className="answer-button" onClick={() => this.colorChosen(this.state.answers[2])} >{this.state.answers[2]}</button>
            </div>
            <div>
              <button style={this.props.diff === "HARD" ? {color: this.randomWordColor()} : {}} className="answer-button" onClick={() => this.colorChosen(this.state.answers[3])} >{this.state.answers[3]}</button>

            </div>
          </div>
          <div className="timer-container">
            <Timer diff={this.props.diff} send={this.props.func} setCount1={this.props.setCount1}/>
            <button className="next-button" onClick={() => this.changeEverything()} >NEXT</button>
            <button className="next-button" onClick={() => this.props.setCount1(10)} >set 10</button>
          </div>
        </div>
        <div>
          <p className="attempts">Attempts {this.state.count}</p>
          <p className="attempts">Correct Attempts {this.state.countAns}</p>
        </div>
      </div>
    )
  }
}

export default Game
