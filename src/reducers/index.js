import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import auth from './auth'
import feature from './feature'

export default combineReducers(
  { form, auth, feature }
)
