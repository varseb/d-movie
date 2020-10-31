import api from 'redux/api'
import { success, failure } from 'redux/http'

const GET_CONFIGURATION_REQUEST = 'config/GET_CONFIGURATION_REQUEST'
const GET_CONFIGURATION_SUCCESS = 'config/GET_CONFIGURATION_SUCCESS'
const GET_CONFIGURATION_FAILURE = 'config/GET_CONFIGURATION_FAILURE'

const initialState = {
  images: {}
}

const reducer = (state = initialState, { type: actionType, payload }) => {
  switch( actionType ){
    case GET_CONFIGURATION_SUCCESS: {
      const { images } = payload.data

      return {
        images
      }
    }

    default:
      return state
  }
}

export const getConfiguration = () => dispatch => {
  dispatch({
    type: GET_CONFIGURATION_REQUEST
  })

  api.config.getConfiguration()
    .then(success(GET_CONFIGURATION_SUCCESS))
    .catch(failure(GET_CONFIGURATION_FAILURE))
}


export default reducer
