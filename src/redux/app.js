import { connect as reduxConnect } from 'react-redux'
import { bindActionCreators } from 'redux'
import selector from './selector'

import * as config from './module/config'
import * as credit from './module/credit'
import * as genre from './module/genre'
import * as layout from './module/layout'
import * as movie from './module/movie'
import * as person from './module/person'
import * as search from './module/search'
import * as serie from './module/serie'
import * as user from './module/user'

export const action = {
  config,
  credit,
  genre,
  layout,
  movie,
  person,
  search,
  serie,
  user
}

export {
  selector
}

export const connect = (mapStateToProps, mapDispatchToProps, Component) => reduxConnect(
  mapStateToProps,
  mapDispatchToProps && (dispatch => bindActionCreators(mapDispatchToProps, dispatch))
)(Component)
