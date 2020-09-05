import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { SET_POSITION, SET_NAME } from './actionTypes'

const useActions = () => {
  const dispatch = useDispatch()
  const setName = useCallback(name => {
    dispatch({
      type: SET_NAME,
      name
    })
  })
  const setPosition = useCallback(position => {
    dispatch({
      type: SET_POSITION,
      position
    })
  })
  return { setName, setPosition }
}

export default useActions
