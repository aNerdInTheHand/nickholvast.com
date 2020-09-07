import React, { useState } from 'react'
import { gameStates, scenarios } from './constants'
// import generateScenario from './generateScenario'

const Dad = () => {
  const [status, setStatus] = useState(gameStates.preGame)
  const [message, setMessage] = useState()
  const [score, incrementScore] = useState(0)
  const [availableScenarios, setAvailableScenarios] = useState(scenarios)
  console.log(availableScenarios)

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

  const renderInGame = () => {
    const scenarioIndex = Math.floor(Math.random() * availableScenarios.length)
    const { text, options } = availableScenarios[scenarioIndex]
    return (
      <div>
        {message && <p>{message}</p>}
        <p>{text}</p>
        {options.map((option, key) => renderOption(option, scenarioIndex, key))}
      </div>
    )
  }

  const renderOption = (option, index, key) => (
    <button
      key={key}
      onClick={() => {
        setStatus(option.success ? gameStates.inGame : gameStates.gameOver);
        setMessage(option.success ? option.successMessage : option.failureMessage);
        setAvailableScenarios(availableScenarios.filter((_, i) => i !== index))}
      }
    >
      {option.buttonText}
    </button>
  )

  const renderGameOver = () => (
    <div>
      <h3>GAME OVER</h3>
      {message && <p>{message}</p>}
      <p>Would you like to play again?</p>
      <button
        type='button'
        onClick={() => {
          setStatus(gameStates.inGame);
          setMessage();
          setAvailableScenarios(scenarios)
        }}
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
      {status !== gameStates.preGame && <p>Score: {score}</p>}
    </div>
  )
}

export default Dad
