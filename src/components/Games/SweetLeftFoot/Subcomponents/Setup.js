import React from 'react'

export default props => (
  <div>
    <p>Welcome to Sweet Left Foot, a football game where you take up a position
      in the starting XI and try to influence the game by making choices each
      time you get the opportunity.</p>
    <button
      type='button'
      onClick={() => props.setName('Steve Barnes')}
    >
      Steve Barnes
    </button>
    <button
      type='button'
      onClick={() => props.setPosition('centre back')}
    >
      CB
    </button>
  </div>
)
