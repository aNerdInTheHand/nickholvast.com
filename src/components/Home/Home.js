import React from 'react'
import { Button, Card, Col, Container, Jumbotron, Row } from 'react-bootstrap'
import classes from './Home.module.css'

export default () => (
  <Container fluid>
    <Row>
      <Col>
        <h1 className={classes.homeHeader}>Nick Holvast dot com</h1>
      </Col>
    </Row>
    <Row className={classes.homeRow}>
      <Col>
        <Jumbotron className={classes.jumbotron}>🏗️️ Site under construction</Jumbotron>
      </Col>
    </Row>
  </Container>
)
