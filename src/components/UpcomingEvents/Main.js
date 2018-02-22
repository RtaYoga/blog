import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
 Row,
 Col,
 Button
} from 'reactstrap'

import Calendar from './Calendar'

class MainComponent extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <center style={{
              padding: '15px'
            }}>
              <h1>Scheduled Events and Calendar</h1>
              <Button>
                Add New Event!
              </Button>
              <br/>
            </center>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Calendar />
          </Col>
        </Row>
      </div>
    )
  }

}


const mapStoreToProps = (store, props) => {
  return {
    main: store.main
  }
}

const Main = connect(mapStoreToProps)(MainComponent)

export default Main
