import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import createLogger from 'redux-logger'
import { localStorageLoad, localStorageDump, logger } from './middleware'

import Root from './components/Root'

const middleware = [ localStorageDump ]
if (process.env.NODE_ENV !== 'producation') {
  middleware.push(createLogger())
  // middleware.push(logger)
}

const preloadedState = () => {
  return {
      todos: JSON.parse(localStorage.getItem('routeTodos')) || []
  }
}

const store = createStore(
  reducer,
  preloadedState(), 
  applyMiddleware(...middleware)
)

// store.dispatch({type: 'INIT_STATE'})
render(
  <Root store={store} />,
  document.getElementById('root')
)