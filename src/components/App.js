import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Signin from './auth/Signin'
import Signout from './auth/Signout'
import Signup from './auth/Signup'

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className='container'>
        <Route path='/signin' component={Signin} />
        <Route path='/signout' component={Signout} />
        <Route path='/signup' component={Signup} />
      </div>
    </Fragment>
  )
}

export default App
