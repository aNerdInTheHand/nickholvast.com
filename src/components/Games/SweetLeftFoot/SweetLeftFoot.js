import React from 'react'
import { useName, useActions } from '../../../features/sweetleftfoot'

const SweetLeftFoot = () => {
  /**
    *  Get name value from Redux store. We defined selector
    *  (state => state.sweetleftfoot.name) inside sweetleftfoot feature folder,
    *  to make component global state agnostic
  */
  const name = useName()
  const { setName } = useActions()

  return (
    <div>
      <h2>Sweet Left Foot</h2>
      <p>Hi, {name}</p>
      <button
        type='button'
        onClick={() => setName('Steve Barnes')}
      >
        Steve Barnes
      </button>
    </div>
  )
}

export default SweetLeftFoot
