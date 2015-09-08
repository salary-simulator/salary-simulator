import React, { Component, PropTypes } from 'react'
import { INTRO_STEP } from '../constants/gameStep'
import IntroScreen from './screens/IntroScreen'

export default class Game extends Component {
  onTouchStart(ev) {
    ev.target.classList.add('touching')
  }

  onTouchEnd(ev) {
    ev.target.classList.remove('touching')
  }

  render() {
    let screen
    switch (this.props.gameStep) {

    case INTRO_STEP:
    default:
      screen = <IntroScreen />
      break

    }
    return (
      <div className="game-container" onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd} onTouchCancel={this.onTouchCancel}>
        <div className="game-box">
          {screen}
        </div>
      </div>
    )
  }
}

Game.propTypes = {
  onSelectChoice: PropTypes.func.isRequired,
  gameStep: PropTypes.string.isRequired,
  character: PropTypes.string,
  choices: PropTypes.array.isRequired,
}
