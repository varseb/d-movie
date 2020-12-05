import api from 'redux/api'
import { success, failure } from 'redux/http'

const GET_MOVIE_GENRES_REQUEST = 'genre/GET_MOVIE_GENRES_REQUEST'
const GET_MOVIE_GENRES_SUCCESS = 'genre/GET_MOVIE_GENRES_SUCCESS'
const GET_MOVIE_GENRES_FAILURE = 'genre/GET_MOVIE_GENRES_FAILURE'

const GET_SERIE_GENRES_REQUEST = 'genre/GET_SERIE_GENRES_REQUEST'
const GET_SERIE_GENRES_SUCCESS = 'genre/GET_SERIE_GENRES_SUCCESS'
const GET_SERIE_GENRES_FAILURE = 'genre/GET_SERIE_GENRES_FAILURE'

const initialState = {
  movie: {},
  serie: {}
}

export default function reducer(state = initialState, { type: actionType, payload }){
  switch( actionType ){
    case GET_MOVIE_GENRES_SUCCESS:
      return {
        ...state,
        movie: payload.data.genres.reduce((genres, genre) => ({
          ...genres,
          [genre.id]: genre
        }), {})
      }

    case GET_SERIE_GENRES_SUCCESS:
      return {
        ...state,
        serie: payload.data.genres.reduce((genres, genre) => ({
          ...genres,
          [genre.id]: genre
        }), {})
      }

    default:
      return state
  }
}

export const getMovieGenres = payload => dispatch => dispatch({
  type: GET_MOVIE_GENRES_REQUEST,
  meta: api.genre.getMovieGenres(payload)
    .then(success(dispatch, GET_MOVIE_GENRES_SUCCESS, payload))
    .catch(failure(dispatch, GET_MOVIE_GENRES_FAILURE))
})

export const getSerieGenres = payload => dispatch => dispatch({
  type: GET_SERIE_GENRES_REQUEST,
  meta: api.genre.getSerieGenres(payload)
    .then(success(dispatch, GET_SERIE_GENRES_SUCCESS, payload))
    .catch(failure(dispatch, GET_SERIE_GENRES_FAILURE))
})
