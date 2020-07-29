import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom'
import Dad from './Dad'
import Footbawl from './Footbawl'

export default () => {
  const match = useRouteMatch()
  console.log(match.url, match.path)

  return (
    <div>
      <h2>Games</h2>
      <ul>
        <li>
          <Link to='games/dad'>The Dad Game</Link>
        </li>
        <li>
          <Link to='games/footbawl'>The Football Game</Link>
        </li>
      </ul>

      <Switch>
        <Route path='games/dad'>
          <Dad />
        </Route>
        <Route path='games/footbawl'>
          <Footbawl />
        </Route>
        <Route path='games'>
          <h3>Please select a game.</h3>
        </Route>
      </Switch>
    </div>
  )
}
