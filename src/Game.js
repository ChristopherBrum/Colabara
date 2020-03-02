import React from 'react'

function Game() {
  let colors = [yellow, blue, red, black]
  let sample = colors[0]

  return (
    <div>
      <p>the sky is {sample}</p>
      <button>{colors[1]}</button>
      <button>{colors[2]}</button>
    </div>
  )
}

export default Game
