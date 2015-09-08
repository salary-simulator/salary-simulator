import Immutable from 'immutable'
import {
  START_GAME,
  SELECT_CHOICE,
} from '../actions/game'

import { INTRO_STEP } from '../constants/gameStep'

const initialState = Immutable.fromJS({
  gameStep: INTRO_STEP,
  character: null,
  choices: [],
})

export default function game(state = initialState, action) {
  switch (action.type) {

  case START_GAME:
    return state.merge({
      gameStep: 'playing',
      character: action.character,
      choices: [
        'choice 1 example',
        'choice 2 example',
        'choice 3 example',
        'choice 4 example',
      ],
    })

  case SELECT_CHOICE:
    return state.merge({
      choices: [
        'next choice 1 example',
        'next choice 2 example',
        'next choice 3 example',
        'next choice 4 example',
      ],
    })

  default:
    return state

  }
}
