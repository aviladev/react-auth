import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css'

import reducers from './reducers'

import App from './components/App'

const token = window.localStorage.getItem('token')

const store = createStore(
  reducers,
  { auth: {
    authenticated: Boolean(token)
  }},
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' component={App} />
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root')
)
