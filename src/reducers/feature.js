import { FETCH_MESSAGE } from '../actions/types'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_MESSAGE:
      return { ...state, message: payload }
    default:
      return state
  }
}
