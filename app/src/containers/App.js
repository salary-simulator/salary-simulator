import Immutable from 'immutable'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchIndex } from '../actions/scripts'
import { selectChoice } from '../actions/game'
import Game from '../components/Game'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchIndex())
  }

  render() {
    const { game, dispatch } = this.props
    return (
      <Game
        onSelectChoice={choice => dispatch(selectChoice(choice))}
        {...game.toJS()}
      />
    )
  }
}

App.propTypes = {
  game: PropTypes.instanceOf(Immutable.Map).isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    game: state.game,
  }
}

export default connect(mapStateToProps)(App)
