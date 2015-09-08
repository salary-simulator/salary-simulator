import 'babel-core/polyfill'
import 'whatwg-fetch'

import React from 'react'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore()

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('container'),
)

if (process.env.NODE_ENV !== 'production') {
  const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react')
  const containerEl = document.body.appendChild(document.createElement('div'))
  React.render(
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>,
    containerEl,
  )
}
