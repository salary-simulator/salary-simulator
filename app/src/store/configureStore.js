import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

let createStoreWithMiddleware
if (process.env.NODE_ENV === 'production') {
  createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
  )(createStore)
} else {
  const { devTools } = require('redux-devtools')
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    devTools(),
  )(createStore)
}

export default function configureStore() {
  const store = createStoreWithMiddleware(rootReducer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
