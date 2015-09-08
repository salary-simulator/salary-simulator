import Immutable from 'immutable'
import {
  INDEX_REQUEST,
  INDEX_SUCCESS,
  INDEX_FAILURE,
  SCRIPT_REQUEST,
  SCRIPT_SUCCESS,
  SCRIPT_FAILURE,
} from '../actions/scripts'

const initialState = Immutable.fromJS({
  isFetching: false,
  isError: false,
  index: null,
  script: {},
})

export default function todos(state = initialState, action) {
  switch (action.type) {

  case INDEX_REQUEST:
    return state.set('isFetching', 'index')

  case INDEX_SUCCESS:
    return state.merge({
      isFetching: false,
      isError: false,
      index: action.index,
    })

  case INDEX_FAILURE:
    console.error('error fetching index data:', action.error) // eslint-disable-line no-console
    return state.merge({
      isFetching: false,
      isError: action.error,
    })

  case SCRIPT_REQUEST:
    return state.set('isFetching', 'index')

  case SCRIPT_SUCCESS:
    return state.merge({
      isFetching: false,
      isError: false,
      index: action.index,
    })

  case SCRIPT_FAILURE:
    console.error('error fetching script data:', action.error)  // eslint-disable-line no-console
    return state.merge({
      isFetching: false,
      isError: action.error,
    })

  default:
    return state

  }
}
