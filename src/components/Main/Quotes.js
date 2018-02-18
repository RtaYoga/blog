import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Row,
  Col
} from 'reactstrap'

class QuotesComponent extends Component {
  constructor(ops) {
    super(ops)

    this.state = {
      quoteOfTheDay: {}
    }
  }


  componentDidMount() {
    const { Inspiration: { quotes } } = this.props

    // Get random number from the length of quotes; use random number to get the
    // index for the quote of the day
    const index = Math.floor(Math.random() * (quotes.length));

    this.setState({
      quoteOfTheDay: quotes[index]
    })
  }

  render() {
    const { quoteOfTheDay: { author, quote, sharedBy } } = this.state
    // Render The quote of the day here!
    return (
      <Row>
        <Col lg={2}/>
        <Col lg={8}>
          <div style={{
            // background: 'linear-gradient(-45deg, #F3969A, #78C2AD)',
            // background: 'linear-gradient(135deg, rgba(242,223,191,0), rgba(243, 150, 154,1))',
            margin: '100px',
            // padding: '15px'
            // color: 'white'
          }}>
            <h3 style={{
              // color: 'white'
            }}>{quote}</h3>
            <p className="lead" style={{ color: 'gray' }}> -- {author}</p>
            <hr className="my-4" />
            <small>Shared By {sharedBy}</small>
            <br/>
            <p className="lead">
              <a className="btn btn-secondary btn-sm" href="#" role="button">Have a Quote? Click to share!</a>
            </p>
          </div>
        </Col>
        <Col lg={2}/>
      </Row>
    )
  }

}

const mapStoreToProps = (store, props) => {
  return {
    Inspiration: store.Inspiration
  }
}

const Quotes = connect(mapStoreToProps)(QuotesComponent)

export default Quotes
