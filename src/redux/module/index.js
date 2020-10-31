import { combineReducers } from 'redux'
import config from './config'
import layout from './layout'
import movie from './movie'

export default combineReducers({
  config,
  layout,
  movie
})
