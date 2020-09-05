import { useSelector } from 'react-redux'

/**
 * Custom React Hook to get count value from state.
 * @see https://reactjs.org/docs/hooks-custom.html
 */
export const useName = () => useSelector(state => state.sweetLeftFoot.name)
export const usePosition = () => useSelector(state => state.sweetLeftFoot.position)
