import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Signin from './auth/Signin'
import Signout from './auth/Signout'

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className='container'>
        <Route path='/signin' component={Signin} />
        <Route path='/signout' component={Signout} />
      </div>
    </Fragment>
  )
}

export default App
