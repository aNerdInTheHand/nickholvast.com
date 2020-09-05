import React from 'react'
import {
  useActions,
  useName,
  usePosition
} from '../../../features/sweetleftfoot'

const SweetLeftFoot = () => {
  /**
    *  Get name value from Redux store. We defined selector
    *  (state => state.sweetleftfoot.name) inside sweetleftfoot feature folder,
    *  to make component global state agnostic
  */
  const name = useName()
  const position = usePosition()
  const { setName, setPosition } = useActions()

  return (
    <div>
      <h2>Sweet Left Foot</h2>
      <p>Hi, {name}, {position} extraordinaire!</p>
      <button
        type='button'
        onClick={() => setName('Steve Barnes')}
      >
        Steve Barnes
      </button>
      <button
        type='button'
        onClick={() => setPosition('centre back')}
      >
        CB
      </button>
    </div>
  )
}

export default SweetLeftFoot
