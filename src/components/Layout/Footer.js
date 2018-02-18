import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Container,
  Row,
  Col
} from 'reactstrap'


class FooterComponent extends Component {
  constructor(ops) {
    super(ops)

    this.state = {
      navOpen: false,
      dropdownOpen: false,
    }
  }


  componentDidMount() {
    const { Account: { auth: { loggedIn } } } = this.props
    console.log('User is logged in? ', loggedIn)
  }

  render() {


    return (
      <div style={{
        background: '#78C2AD',
        color: 'white',
        padding: '15px'
      }}>
        <Container>
          <Row>
            <Col lg={4}>
              <p>Follow Our Journey on Social Media!</p>
            </Col>
            <Col lg={4}>
              <p>Signup for Our Newsletter! or Download the Mobile App!</p>
            </Col>
            <Col lg={4}>
              <p>Have a Yoga Practice? Download Rta Software!</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}

const mapStoreToProps = (store, props) => {
  return {
    Account: store.Account,
  }
}

const Footer = connect(mapStoreToProps)(FooterComponent)

export default Footer
