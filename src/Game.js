import React from 'react'
import './Game.css'

function Game() {
  let colors = ["yellow", "blue", "red", "black"]
  let sample = colors[0]

  return (
    <div className="game-box">
      <div className="text-box">
        <p>the sky is {sample}</p>
      </div>
      <div className="b1">
        <button>{colors[1]}</button>
      </div>
      <div className="b2">
        <button>{colors[2]}</button>
      </div>
    </div>
  )
}

export default Game
