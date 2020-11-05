import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './module'

const enhancers = []
const middleware = [ thunk ]

if( process.env.NODE_ENV === 'development' ){
  if( typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function' ){
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  middleware.push(createLogger({
    collapsed: true
  }))
}

const store = createStore(
  reducer,
  getState(),
  compose(applyMiddleware(...middleware), ...enhancers)
)

store.subscribe(() => {
  const { config, genres } = store.getState()

  // save configuration and genres states into localStorage
  saveState({
    config,
    genres
  })
})

function getState(){
  try {
    return JSON.parse(window.localStorage.getItem('d-movie-state')) || {}
  }
  catch (e) {
    return {}
  }
}

function saveState( state ){
  try {
    window.localStorage.setItem('d-movie-state', JSON.stringify(state))
  }
  catch (e) {}
}

export default store
