import React, { Component } from 'react'

export default class IntroScreen extends Component {
  render() {
    return (
      <div className="screen intro">
        <div className="top">
          <h1>$ALARY<br />$IMULATOR 2015</h1>
          <button>INSTRUCTIONS</button>
          <button>CONTRIBUTE</button>
        </div>
      </div>
    )
  }
}

IntroScreen.propTypes = {}
