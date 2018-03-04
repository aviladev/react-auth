import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Header'
import Signin from './auth/Signin'
import Signout from './auth/Signout'
import Signup from './auth/Signup'
import Feature from './Feature'

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className='container'>
        <Switch>
          <Route path='/signin' component={Signin} />
          <Route path='/signout' component={Signout} />
          <Route path='/signup' component={Signup} />
          <Route path='/feature' component={Feature} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default App
