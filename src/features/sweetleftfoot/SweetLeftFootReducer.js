import { SET_NAME, SET_POSITION } from './actionTypes'

const initialState = {
  name: '',
  position: 'LB'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.name }

    case SET_POSITION:
      return { ...state, position: action.position }

    default:
      return state
  }
}
