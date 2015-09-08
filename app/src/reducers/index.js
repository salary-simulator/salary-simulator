import { combineReducers } from 'redux'
import scripts from './scripts'
import game from './game'

const rootReducer = combineReducers({
  scripts,
  game,
})

export default rootReducer
