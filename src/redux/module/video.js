import api from 'redux/api'
import { success, failure } from 'redux/http'

const GET_MOVIE_VIDEOS_REQUEST = 'video/GET_MOVIE_VIDEOS_REQUEST'
const GET_MOVIE_VIDEOS_SUCCESS = 'video/GET_MOVIE_VIDEOS_SUCCESS'
const GET_MOVIE_VIDEOS_FAILURE = 'video/GET_MOVIE_VIDEOS_FAILURE'

const GET_SERIE_VIDEOS_REQUEST = 'video/GET_SERIE_VIDEOS_REQUEST'
const GET_SERIE_VIDEOS_SUCCESS = 'video/GET_SERIE_VIDEOS_SUCCESS'
const GET_SERIE_VIDEOS_FAILURE = 'video/GET_SERIE_VIDEOS_FAILURE'

const initialState = {
  movie: {},
  serie: {}
}

export default function reducer(state = initialState, { type: actionType, payload }){
  switch( actionType ){

    case GET_MOVIE_VIDEOS_SUCCESS: {
      const { id, language, data: { results } } = payload

      return {
        ...state,
        movie: {
          ...state.movie,
          [id]: {
            ...(state.movie[id] || {}),
            [language]: results.filter(({ site }) => site === 'YouTube')
          }
        }
      }
    }

    case GET_SERIE_VIDEOS_SUCCESS: {
      const { id, language, data: { results } } = payload

      return {
        ...state,
        serie: {
          ...state.serie,
          [id]: {
            ...(state.serie[id] || {}),
            [language]: results.filter(({ site }) => site === 'YouTube')
          }
        }
      }
    }

    default:
      return state
  }
}

export const getMovieVideos = payload => dispatch => dispatch({
  type: GET_MOVIE_VIDEOS_REQUEST,
  meta: api.movie.getVideos(payload)
    .then(success(dispatch, GET_MOVIE_VIDEOS_SUCCESS, payload))
    .catch(failure(dispatch, GET_MOVIE_VIDEOS_FAILURE))
})

export const getSerieVideos = payload => dispatch => dispatch({
  type: GET_SERIE_VIDEOS_REQUEST,
  meta: api.serie.getVideos(payload)
    .then(success(dispatch, GET_SERIE_VIDEOS_SUCCESS, payload))
    .catch(failure(dispatch, GET_SERIE_VIDEOS_FAILURE))
})
