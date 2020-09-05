import React, { useState } from 'react'
import { gameStates } from './constants'

const Dad = () => {
  const [status, setStatus] = useState(gameStates.preGame)

  const renderPreGame = () => (
    <div>
      <p>Welcome to The Dad Game, a game where you can experience all the joys of being a dad!</p>
      <p>Simply click 'Start' below, and make sure the baby doesn't cry. Simple!</p>
      <button
        type='button'
        onClick={() => setStatus(gameStates.inGame)}
      >
        Start
      </button>
    </div>
  )

  const renderInGame = () => (
    <button type='button' onClick={() => setStatus(gameStates.gameOver)}>Wake baby</button>
  )

  const renderGameOver = () => (
    <div>
      <h2>GAME OVER</h2>
      <p>Would you like to play again?</p>
      <button
        type='button'
        onClick={() => setStatus(gameStates.inGame)}
      >
        Restart
      </button>
    </div>
  )

  return (
    <div>
      <h2>The Dad Game</h2>
      {status === gameStates.preGame && renderPreGame()}
      {status === gameStates.inGame && renderInGame()}
      {status === gameStates.gameOver && renderGameOver()}
    </div>
  )
}

export default Dad
