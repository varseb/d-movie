import api from 'redux/api'
import { success, failure } from 'redux/http'

const UPDATE_QUERY = 'search/UPDATE_QUERY'

const UPDATE_FILTER = 'search/UPDATE_FILTER'

const SEARCH_MOVIES_REQUEST = 'search/SEARCH_MOVIES_REQUEST'
const SEARCH_MOVIES_SUCCESS = 'search/SEARCH_MOVIES_SUCCESS'
const SEARCH_MOVIES_FAILURE = 'search/SEARCH_MOVIES_FAILURE'

const initialState = {
  query: '',
  filter: {
    rating: null
  },
  results: {}
}

const reducer = (state = initialState, { type: actionType, payload }) => {
  switch( actionType ){
    case UPDATE_QUERY:
      return {
        ...state,
        query: payload.query
      }

    case UPDATE_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          ...payload
        }
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

export const updateFilter = payload => dispatch => dispatch({
  type: UPDATE_FILTER,
  payload
})

export const updateQuery = payload => dispatch => {
  dispatch({
    type: UPDATE_QUERY,
    payload
  })

  if( payload.query ){
    dispatch(searchMovies(payload))
  }
}

export const searchMovies = payload => dispatch => dispatch({
  type: SEARCH_MOVIES_REQUEST,
  meta: api.search.searchMovies(payload)
    .then(success(SEARCH_MOVIES_SUCCESS, payload))
    .catch(failure(SEARCH_MOVIES_FAILURE))
})


export default reducer
