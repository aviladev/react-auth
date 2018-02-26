import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Signin from './auth/Signin'

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className='container'>
        <Route path='/signin' component={Signin} />
      </div>
    </Fragment>
  )
}

export default App
