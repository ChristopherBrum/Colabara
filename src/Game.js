import React from 'react'

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      phrase: this.randomPhrase(),
      word: this.randomWord(),
      color: this.randomWordColor()
    }
  }

  randomPhrase(){
    const phrases = ["The car is", "Today, the sky was", "My favorite color is", "It looks like that orange is actually", "The painter used a lot of"]
    return phrases[Math.floor(Math.random() * phrases.length)]
  }

  randomWord(){
    const colors = ["red", "yellow", "blue", "green", "orange", "purple", "pink", "black", "brown", "gray"]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  randomWordColor(){
    const fontColor = ["red", "blue", "green"]
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
        <button onClick={() => this.changeEverything()}>next</button>
        <p className="phrase">{this.state.phrase} <span className={this.state.color}>{this.state.word}</span></p>
      </div>
    )
  }
}

export default Game
