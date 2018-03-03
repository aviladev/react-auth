import axios from 'axios'

import {
  AUTH_USER,
  AUTH_ERROR
} from './types'

const API_URL = 'http://localhost:8080'

export const signinUser = ({ email, password }, history) =>
  async dispatch => {
    try {
      const response = await axios
        .post(`${API_URL}/signin`, { email, password })

      dispatch({ type: AUTH_USER })

      window.localStorage.setItem('token', response.data.token)

      history.push('/feature')
    } catch (e) {
      dispatch(authError('Bad login info'))
    }
  }

export const authError = error => ({
  type: AUTH_ERROR,
  payload: error
})
