import { combineReducers } from 'redux'
import config from './config'
import genre from './genre'
import layout from './layout'
import movie from './movie'
import search from './search'
import status from './status'

export default combineReducers({
  config,
  genre,
  layout,
  movie,
  search,
  status
})
