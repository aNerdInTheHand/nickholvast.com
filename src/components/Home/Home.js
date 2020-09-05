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
        <p>There's not much here right now.</p>
      </Col>
    </Row>
    <Row className={classes.homeRow}>
      <Col>
        <p>Maybe one day there will be.</p>
      </Col>
    </Row>
    <Row className={classes.homeRow}>
      <Col>
        <p>But don't get your hopes up.</p>
      </Col>
    </Row>
  </Container>
)
