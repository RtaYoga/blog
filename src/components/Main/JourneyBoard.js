import React, { Component } from 'react'
import { connect } from 'react-redux'

import Quotes from './Quotes'

import {
  Container,
  Row,
  Col,
  Jumbotron
} from 'reactstrap'

class JourneyBoardComponent extends Component {

  componentDidMount() {
    const { Account: { auth: { loggedIn } } } = this.props
    console.log('User is logged in? ', loggedIn)
  }

  render() {
    return (
      <div style={{
        background: 'linear-gradient(180deg, rgba(242,223,191,0), rgba(120,194,173,1))'
      }}>
        <Container>
          <Row>
            <Col lg={12}>
              <center>
                <h1>My Yoga Journey </h1>
                <br/>
              </center>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Jumbotron style={{
                backgroundSize: '100%',
                backgroundImage: 'url(https://inhabitat.com/wp-content/blogs.dir/1/files/2017/07/Tadao-Ando-Hill-of-Buddha4-1020x610.jpg)',
                height: '350px',
                padding: '0'
              }}>
                <div style={{ height: '200px' }}></div>
                <div style={{
                  height: '150px',
                  fontColor: 'white',
                  background: 'rgba(0,0,0,.2)',
                  padding: '5px'
                }}>
                  <h1>Blog Title</h1>
                </div>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Row>
                <Col lg={4}>
                  <Jumbotron>
                    <h1>Content</h1>
                  </Jumbotron>
                </Col>
                <Col lg={4}>
                  <Jumbotron>
                    <h1>Content</h1>
                  </Jumbotron>
                </Col>
                <Col lg={4}>
                  <Jumbotron>
                    <h1>Content</h1>
                  </Jumbotron>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <Jumbotron>
                    <h1>Content</h1>
                  </Jumbotron>
                </Col>
                <Col lg={4}>
                  <Jumbotron>
                    <h1>Content</h1>
                  </Jumbotron>
                </Col>
                <Col lg={4}>
                  <Jumbotron>
                    <h1>Content</h1>
                  </Jumbotron>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}

const mapStoreToProps = (store, props) => {
  return {
    Account: store.Account,
    Events: store.Events
  }
}

const JourneyBoard = connect(mapStoreToProps)(JourneyBoardComponent)

export default JourneyBoard
