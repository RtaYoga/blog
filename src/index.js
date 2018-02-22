import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, history } from './store'

import {
  Main,
  Layout,
  UpcomingEvents,
  PhotoGallery,
  Account
} from './components/index'


ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <div style={{
        background: 'radial-gradient(#FFCE67, #f2dfbf)'
      }}>
        <Layout.Header />
        <Route exact path="/" component={Main.Welcome} />
        <Route exact path="/upcoming-events" component={UpcomingEvents.Main} />
        <Route exact path="/photo-gallery" component={PhotoGallery.Main} />
        <Route exact path="/account" component={Account.Main} />
        <Layout.Footer />
      </div>
    </Provider>
  </Router>, document.getElementById('app')
)
