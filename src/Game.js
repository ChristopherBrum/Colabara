import React from 'react'
import './Game.css'

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      phrase: this.changePhrase()
    }
  }


  changePhrase(){
    const phrases = ["The car is", "Today, the sky was", "My favorite color is", "It looks like that orange is actually", "The painter used a lot of"]
    return phrases[Math.floor(Math.random() * phrases.length)]
  }

  render() {
    return (
      <div>
        <p>{this.state.phrase}</p>
      </div>
    )
  }
}

export default Game
