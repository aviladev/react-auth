import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

import reducers from './reducers'

import App from './components/App'

const store = createStore(reducers)

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
