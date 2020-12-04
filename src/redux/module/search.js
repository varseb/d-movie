import api from 'redux/api'
import { success, failure } from 'redux/http'

const UPDATE_QUERY = 'search/UPDATE_QUERY'

const UPDATE_FILTER = 'search/UPDATE_FILTER'

const MULTI_SEARCH_REQUEST = 'search/MULTI_SEARCH_REQUEST'
const MULTI_SEARCH_SUCCESS = 'search/MULTI_SEARCH_SUCCESS'
const MULTI_SEARCH_FAILURE = 'search/MULTI_SEARCH_FAILURE'

const initialState = {
  query: '',
  filter: {
    rating: null
  },
  results: {},
  loading: {}
}

export default function reducer(state = initialState, { type: actionType, payload }){
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

    case MULTI_SEARCH_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,
          [payload.query]: true
        }
      }

    case MULTI_SEARCH_SUCCESS: {
      const { query, data: { results } } = payload

      return {
        ...state,
        loading: {
          ...state.loading,
          [query]: false
        },
        results: {
          ...state.results,
          [query]: results.map(
            ({ id, media_type }) => ({ id, media_type })
          )
        }
      }
    }

    default:
      return state
  }
}

export {
  MULTI_SEARCH_SUCCESS
}

export const updateFilter = payload => dispatch => dispatch({
  type: UPDATE_FILTER,
  payload
})

export const updateQuery = payload => dispatch => dispatch({
  type: UPDATE_QUERY,
  payload
})

export const multiSearch = payload => dispatch => dispatch({
  type: MULTI_SEARCH_REQUEST,
  payload,
  meta: api.search.multiSearch(payload)
    .then(success(dispatch, MULTI_SEARCH_SUCCESS, payload))
    .catch(failure(dispatch, MULTI_SEARCH_FAILURE))
})
