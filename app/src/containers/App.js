import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ScriptActions from '../actions/scripts'
import * as GameActions from '../actions/game'

class App extends Component {
  render() {
    const { choices, dispatch } = this.props
    const scriptActions = bindActionCreators(ScriptActions, dispatch)
    const gameActions = bindActionCreators(GameActions, dispatch)

    return (
      <div>
        hello, world!
        <button onClick={scriptActions.fetchIndex}>fetch</button>
        <button onClick={() => scriptActions.fetchScript('Base')}>fetch sc</button>
        <button onClick={() => gameActions.startGame('Base')}>startGame</button>
        <div>
          {choices.map((choice, i) =>
            <button onClick={() => gameActions.selectChoice(i)}>{choice}</button>
          )}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  choices: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    choices: state.game.get('choices'),
  }
}

export default connect(mapStateToProps)(App)
