import React from 'react'

function Home(){
    return (
      <div className="container">
        <div className="title-container">
          <h5 className="sub-title">WELCOME TO</h5>
          <h1 className="title">COLABRAS</h1>
          <h4 className="tag-title">A RETRO-FUTURISTIC GAME OF WORDS & COLORS</h4>
        </div>
        <div className="sub-container">
          <div className="menu-container">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                GAME MODE
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button">WORDS</button>
                <button className="dropdown-item" type="button">COLORS</button>
                <button className="dropdown-item" type="button">WORDS & COLORS</button>
              </div>
            </div>
            <div>
              <button className="scores">SCORES</button>
            </div>
            <div>
              <button className="start">START</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home;