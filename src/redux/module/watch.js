import api from 'redux/api'
import { success, failure } from 'redux/http'

const GET_MOVIE_PROVIDERS_REQUEST = 'watch/GET_MOVIE_PROVIDERS_REQUEST'
const GET_MOVIE_PROVIDERS_SUCCESS = 'watch/GET_MOVIE_PROVIDERS_SUCCESS'
const GET_MOVIE_PROVIDERS_FAILURE = 'watch/GET_MOVIE_PROVIDERS_FAILURE'

const GET_SERIE_PROVIDERS_REQUEST = 'watch/GET_SERIE_PROVIDERS_REQUEST'
const GET_SERIE_PROVIDERS_SUCCESS = 'watch/GET_SERIE_PROVIDERS_SUCCESS'
const GET_SERIE_PROVIDERS_FAILURE = 'watch/GET_SERIE_PROVIDERS_FAILURE'

const initialState = {
  movie: {},
  serie: {}
}

export default function reducer(state = initialState, { type: actionType, payload }){
  switch( actionType ){
    case GET_MOVIE_PROVIDERS_SUCCESS: {
      const { id, country, data: { results } } = payload

      return {
        ...state,
        movie: {
          ...state.movie,
          [id]: {
            ...(state.movie[id] || {}),
            [country]: storeProviders(results[country] || {})
          }
        }
      }
    }

    case GET_SERIE_PROVIDERS_SUCCESS: {
      const { id, country, data: { results } } = payload

      return {
        ...state,
        serie: {
          ...state.serie,
          [id]: {
            ...(state.serie || {}),
            [country]: storeProviders(results[country] || {})
          }
        }
      }
    }

    default:
      return state
  }
}

const storeProviders = results => {
  const check = ['flatrate', 'rent', 'buy']
  const providers = []

  check.forEach(key => {
    if( results[key] ){
      results[key].forEach(provider => {
        if( providers.findIndex(item => item.provider_id === provider.provider_id ) === -1 ){
          providers.push(provider)
        }
      })
    }
  })

  return providers
}


export const getMovieProviders = payload => dispatch => dispatch({
  type: GET_MOVIE_PROVIDERS_REQUEST,
  meta: api.movie.getProviders(payload)
    .then(success(dispatch, GET_MOVIE_PROVIDERS_SUCCESS, payload))
    .catch(failure(dispatch, GET_MOVIE_PROVIDERS_FAILURE))
})

export const getSerieProviders = payload => dispatch => dispatch({
  type: GET_SERIE_PROVIDERS_REQUEST,
  meta: api.serie.getProviders(payload)
    .then(success(dispatch, GET_SERIE_PROVIDERS_SUCCESS, payload))
    .catch(failure(dispatch, GET_SERIE_PROVIDERS_FAILURE))
})
