import axios from 'axios'

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
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

export const signupUser = ({email, password}) =>
  async dispatch => {
    try {
      const response = await axios
        .post(`${API_URL}/signup`, { email, password })

      dispatch({ type: AUTH_USER })

      window.localStorage.setItem('token', response.data.token)
    } catch ({ response: {
      data: { reason }
    }}) {
      dispatch(authError(reason))
    }
  }

export const signoutUser = () => {
  window.localStorage.removeItem('token')

  return { type: UNAUTH_USER }
}

export const authError = error => ({
  type: AUTH_ERROR,
  payload: error
})

export const fetchMessage = () =>
  async dispatch => {
    const response = await axios.get(API_URL, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })

    dispatch({
      type: FETCH_MESSAGE,
      payload: response.data.message
    })
  }
