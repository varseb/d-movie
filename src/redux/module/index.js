import { combineReducers } from 'redux'
import config from './config'
import credit from './credit'
import genre from './genre'
import layout from './layout'
import movie from './movie'
import person from './person'
import search from './search'
import serie from './serie'
import status from './status'
import user from './user'

export default combineReducers({
  config,
  credit,
  genre,
  layout,
  movie,
  person,
  search,
  serie,
  status,
  user
})
