import api from 'redux/api'
import { success, failure } from 'redux/http'

const UPDATE_QUERY = 'search/UPDATE_QUERY'

const SEARCH_MOVIES_REQUEST = 'search/SEARCH_MOVIES_REQUEST'
const SEARCH_MOVIES_SUCCESS = 'search/SEARCH_MOVIES_SUCCESS'
const SEARCH_MOVIES_FAILURE = 'search/SEARCH_MOVIES_FAILURE'

const initialState = {
  query: '',
  results: {}
}

const reducer = (state = initialState, { type: actionType, payload }) => {
  switch( actionType ){
    case UPDATE_QUERY:
      return {
        ...state,
        query: payload.query
      }

    case SEARCH_MOVIES_SUCCESS: {
      const { query, data: { results } } = payload

      // search results (movie id's) indexed by query
      return {
        ...state,
        results: {
          ...state.results,
          [query]: results.map(({ id }) => id)
        }
      }
    }

    default:
      return state
  }
}

// Export this action will let the movie reducer use it to store the movie source
export {
  SEARCH_MOVIES_SUCCESS
}

export const searchMovies = payload => dispatch => {
  dispatch({
    type: UPDATE_QUERY,
    payload
  })

  if( payload.query ){
    dispatch({
      type: SEARCH_MOVIES_REQUEST,
      meta: api.search.searchMovies(payload)
        .then(success(SEARCH_MOVIES_SUCCESS, payload))
        .catch(failure(SEARCH_MOVIES_FAILURE))
    })
  }
}


export default reducer
