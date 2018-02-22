import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
 Row,
 Col
} from 'reactstrap'

class MainComponent extends Component {

  render() {
    return (
      <h1>Hello, Creative Individual</h1>
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
