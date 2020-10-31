import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import selector from './selector'

import * as config from './module/config'
import * as genre from './module/genre'
import * as layout from './module/layout'
import * as movie from './module/movie'
import * as search from './module/search'


export const action = {
  config,
  genre,
  layout,
  movie,
  search
}


export {
  selector
}


export const register = (mapStateToProps, actions, Component) => connect(
  mapStateToProps,
  actions && (dispatch => bindActionCreators(actions, dispatch))
)(Component)
