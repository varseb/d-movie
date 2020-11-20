import { combineReducers } from 'redux'
import config from './config'
import genre from './genre'
import layout from './layout'
import movie from './movie'
import person from './person'
import search from './search'
import status from './status'
import user from './user'

export default combineReducers({
  config,
  genre,
  layout,
  movie,
  person,
  search,
  status,
  user
})
