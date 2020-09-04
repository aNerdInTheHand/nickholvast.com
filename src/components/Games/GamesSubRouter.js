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
  let { path, url } = useRouteMatch()

  return (
    <div>
      <h2>Games</h2>
      <ul>
        <li>
          <Link to={`${url}/dad`}>The Dad Game</Link>
        </li>
        <li>
          <Link to={`${url}/sweetleftfoot`}>Sweet Left Foot</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a game.</h3>
        </Route>
        <Route path={`${path}/sweetleftfoot`}>
          <Footbawl />
        </Route>
        <Route path={`${path}/dad`}>
          <Dad />
        </Route>
      </Switch>
    </div>
  )
}
