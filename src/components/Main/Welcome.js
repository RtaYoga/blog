import React, { Component } from 'react'
import { connect } from 'react-redux'

import Quotes from './Quotes'
import JourneyBoard from './JourneyBoard'

import {
  Container,
  Row,
  Col,
  Jumbotron
} from 'reactstrap'

class WelcomeComponent extends Component {

  componentDidMount() {
    const { Account: { auth: { loggedIn } } } = this.props
    console.log('User is logged in? ', loggedIn)
  }

  render() {
    return (
      <div>
        <Quotes />
        <JourneyBoard />
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

const Welcome = connect(mapStoreToProps)(WelcomeComponent)

export default Welcome
