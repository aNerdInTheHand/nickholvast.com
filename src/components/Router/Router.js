import React, {Suspense, lazy} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import classes from './Router.module.css'
import ErrorBoundary from '../Utils/ErrorBoundary'

const Redux = lazy(() => import('../Redux'))
const Games = lazy(() => import('../Games'))
const Home = lazy(() => import('../Home'))
const Sully = lazy(() => import('../Sully'))

const renderFallback = () => <div className={classes.fallback}>Loading...</div>

export default () => (
  <div className={classes.page}>
    <Router>
      <Suspense fallback={renderFallback()}>
        <div className={classes.navTopLevel}>
          <nav>
            <ul className={classes.navRow}>
              <li className={classes.navItem}>
                <Link to="/">Home</Link>
              </li>
              <li className={classes.navItem}>
                <Link to="/sully">Sully</Link>
              </li>
              <li className={classes.navItem}>
                <Link to="/redux">Redux</Link>
              </li>
              <li className={classes.navItem}>
                <Link to="/games">Games</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/sully">
              <ErrorBoundary>
                <Sully />
              </ErrorBoundary>
            </Route>
            <Route path="/redux">
              <ErrorBoundary>
                <Redux />
              </ErrorBoundary>
            </Route>
            <Route path="/games">
              <ErrorBoundary>
                <Games />
              </ErrorBoundary>
            </Route>
            <Route path="/">
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            </Route>
          </Switch>
        </div>
      </Suspense>
    </Router>
  </div>
)
