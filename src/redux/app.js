import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import selector from './selector'

import * as config from './module/config'
import * as layout from './module/layout'
import * as movie from './module/movie'


export const action = {
  config,
  layout,
  movie
}


export {
  selector
}


export const register = (mapStateToProps, actions, Component) => connect(
  mapStateToProps,
  actions && (dispatch => bindActionCreators(actions, dispatch))
)(Component)
