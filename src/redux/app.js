import { connect as reduxConnect } from 'react-redux'
import { bindActionCreators } from 'redux'
import selector from './selector'

import * as config from './module/config'
import * as genre from './module/genre'
import * as layout from './module/layout'
import * as movie from './module/movie'
import * as search from './module/search'
import * as user from './module/user'

export const action = {
  config,
  genre,
  layout,
  movie,
  search,
  user
}

export {
  selector
}

export const connect = (mapStateToProps, mapDispatchToProps, Component) => reduxConnect(
  mapStateToProps,
  mapDispatchToProps && (dispatch => bindActionCreators(mapDispatchToProps, dispatch))
)(Component)
