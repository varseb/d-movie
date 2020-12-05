import api from 'redux/api'
import { success, failure } from 'redux/http'

export const GET_MOVIE_CREDITS_REQUEST = 'credit/GET_MOVIE_CREDITS_REQUEST'
export const GET_MOVIE_CREDITS_SUCCESS = 'credit/GET_MOVIE_CREDITS_SUCCESS'
export const GET_MOVIE_CREDITS_FAILURE = 'credit/GET_MOVIE_CREDITS_FAILURE'

export const GET_SERIE_CREDITS_REQUEST = 'credit/GET_SERIE_CREDITS_REQUEST'
export const GET_SERIE_CREDITS_SUCCESS = 'credit/GET_SERIE_CREDITS_SUCCESS'
export const GET_SERIE_CREDITS_FAILURE = 'credit/GET_SERIE_CREDITS_FAILURE'


const initialState = {
  movie: {},
  serie: {}
}

export default function reducer(state = initialState, { type: actionType, payload }){
  switch( actionType ){

    case GET_MOVIE_CREDITS_SUCCESS: {
      const { id, data: { cast, crew } } = payload

      return {
        ...state,
        movie: {
          ...state.movie,
          [id]: {
            cast: storeCast({ cast }),
            director: crew.find(({ job }) => job === 'Director')
          }
        }
      }
    }

    case GET_SERIE_CREDITS_SUCCESS: {
      const { id, data: { cast } } = payload

      return {
        ...state,
        serie: {
          ...state.serie,
          [id]: {
            cast: storeCast({ cast })
          }
        }
      }
    }

    default:
      return state
  }
}

const storeCast = ({ cast }) => cast.map(
  ({ id, credit_id, character }) => ({
    id,
    credit_id,
    character
  })
)

export const getMovieCredits = payload => dispatch => dispatch({
  type: GET_MOVIE_CREDITS_REQUEST,
  meta: api.movie.getCredits(payload)
    .then(success(dispatch, GET_MOVIE_CREDITS_SUCCESS, payload))
    .catch(failure(dispatch, GET_MOVIE_CREDITS_FAILURE))
})

export const getSerieCredits = payload => dispatch => dispatch({
  type: GET_SERIE_CREDITS_REQUEST,
  meta: api.serie.getCredits(payload)
    .then(success(dispatch, GET_SERIE_CREDITS_SUCCESS, payload))
    .catch(failure(dispatch, GET_SERIE_CREDITS_FAILURE))
})
