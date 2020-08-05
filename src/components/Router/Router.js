import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import classes from './Router.module.css'
import ErrorBoundary from '../Utils/ErrorBoundary'
import { Container, Modal, Navbar, Nav, NavItem } from 'react-bootstrap'

const Redux = lazy(() => import('../Redux'))
const Games = lazy(() => import('../Games'))
const Home = lazy(() => import('../Home'))
const Sully = lazy(() => import('../Sully'))

const renderFallback = () => (
  <Modal.Dialog>
    <Modal.Body>Loading...</Modal.Body>
  </Modal.Dialog>
)

export default () => (
  <div className={classes.page}>
    <Router>
      <Suspense fallback={renderFallback()}>
        <div>
          <Container fluid>
            <Navbar bg='light'>
            <Navbar.Brand href='https://github.com/anerdinthehand'>aNerdInTheHand</Navbar.Brand>
              <Nav className='mr-auto'>
                <NavItem href='/'>
                  <Nav.Link as={Link} to='/'>Home</Nav.Link>
                </NavItem>
                <NavItem href='/sully'>
                  <Nav.Link as={Link} to='/sully'>Sully</Nav.Link>
                </NavItem>
                {/* <NavItem href='redux'>
                  <Nav.Link as={Link} to='/redux'>Redux</Nav.Link>
                </NavItem>
                <NavItem href='games'>
                  <Nav.Link as={Link} to='/games'>Games</Nav.Link>
                </NavItem> */}
              </Nav>
            </Navbar>
          </Container>

          <Switch>
            <Route path="/sully">
              <ErrorBoundary>
                <Sully />
              </ErrorBoundary>
            </Route>
            {/* <Route path="/redux">
              <ErrorBoundary>
                <Redux />
              </ErrorBoundary>
            </Route>
            <Route path="/games">
              <ErrorBoundary>
                <Games />
              </ErrorBoundary>
            </Route> */}
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
