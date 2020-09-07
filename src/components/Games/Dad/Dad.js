import React, { useState } from 'react'
import { gameStates, scenarios} from './constants'
import { calculateSuccess, shuffleArray } from './helpers'

const Dad = () => {
  const [status, setStatus] = useState(gameStates.preGame)
  const [message, setMessage] = useState()
  const [score, setScore] = useState(0)
  const [availableScenarios, setAvailableScenarios] = useState(shuffleArray(scenarios))

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

  const renderOption = (option, index, key) => {
    const success = calculateSuccess()
    console.log(success)
    return (
      <button
        key={key}
        onClick={() => {
          setScore(success ? score + 1 : score);
          setStatus(success ? gameStates.success : gameStates.gameOver);
          setMessage(success ? option.successMessage : option.failureMessage);
          setAvailableScenarios(availableScenarios.filter((_, i) => i !== index))}
        }
      >
        {option.buttonText}
      </button>
    )
  }

  const renderSuccess = () => (
    <div>
      <h3>Winning!</h3>
      <p>{message}</p>
      <p>But your job isn't over yet.</p>
      <button
        type='button'
        onClick={() => {
          setStatus(gameStates.inGame);
          setMessage()}
        }
      >
        Continue
      </button>
    </div>
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

  const completedItMate = () => (
    <h3>Being a dad? Completed it mate.</h3>
  )

  return (
    <div>
      <h2>The Dad Game</h2>
      {status === gameStates.preGame && renderPreGame()}
      {status === gameStates.inGame && renderInGame()}
      {status === gameStates.success && renderSuccess()}
      {status === gameStates.gameOver && renderGameOver()}
      {status === gameStates.completedItMate && renderCompletedItMate()}
      {status !== gameStates.preGame && <p>Score: {score}</p>}
    </div>
  )
}

export default Dad
