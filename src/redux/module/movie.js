import api from 'redux/api'
import { success, failure } from 'redux/http'

import { MULTI_SEARCH_SUCCESS } from './search'
import { GET_MOVIE_CREDITS_SUCCESS } from 'redux/module/person'

const DISCOVER_MOVIES_REQUEST = 'movie/DISCOVER_MOVIES_REQUEST'
const DISCOVER_MOVIES_SUCCESS = 'movie/DISCOVER_MOVIES_SUCCESS'
const DISCOVER_MOVIES_FAILURE = 'movie/DISCOVER_MOVIES_FAILURE'

const GET_MOVIE_REQUEST = 'movie/GET_MOVIE_REQUEST'
const GET_MOVIE_SUCCESS = 'movie/GET_MOVIE_SUCCESS'
const GET_MOVIE_FAILURE = 'movie/GET_MOVIE_FAILURE'

const initialState = {
  list: [],
  movies: {}
}

export default function reducer(state = initialState, { type: actionType, payload }){
  switch( actionType ){
    case DISCOVER_MOVIES_SUCCESS: {
      const { results } = payload.data

      const list = results.map(({ id }) => id)

      return {
        ...state,
        list: payload.page === 1 ? list : [...new Set([
          ...state.list,
          ...list
        ])],
        movies: storeMovies({ state, results })
      }
    }

    case GET_MOVIE_SUCCESS: {
      const { id, data: movie } = payload

      return {
        ...state,
        movies: {
          ...state.movies,
          [id]: {
            ...state.movies[id],
            ...movieDTO(movie)
          }
        }
      }
    }

    case MULTI_SEARCH_SUCCESS: {
      const results = payload.data.results.filter(
        ({ media_type }) => media_type === 'movie'
      )

      return {
        ...state,
        movies: storeMovies({ state, results })
      }
    }

    case GET_MOVIE_CREDITS_SUCCESS: {
      const { cast: results } = payload.data

      return {
        ...state,
        movies: storeMovies({ state, results })
      }
    }

    default:
      return state
  }
}

const movieDTO = movie => {
  const m = {
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
    original_language: movie.original_language,
    genre_ids: movie.genre_ids || (movie.genres || []).map(({ id }) => id),
    vote_average: movie.vote_average,
    overview: movie.overview,
    release_date: movie.release_date,
    popularity: movie.popularity,
    media_type: 'movie'
  }

  if( movie.runtime ){
    m.runtime = movie.runtime
  }

  return m
}

const storeMovies = ({ state, results }) =>
  results.reduce((movies, movie) => ({
    ...movies,
    [movie.id]: {
      ...(state.movies[movie.id] || {}),
      ...movieDTO(movie)
    }
  }), {
    ...state.movies
  }
)

export const discoverMovies = payload => dispatch => dispatch({
  type: DISCOVER_MOVIES_REQUEST,
  meta: api.movie.discoverMovies(payload)
    .then(success(dispatch, DISCOVER_MOVIES_SUCCESS, payload))
    .catch(failure(dispatch, DISCOVER_MOVIES_FAILURE))
})

export const getMovie = payload => dispatch => dispatch({
  type: GET_MOVIE_REQUEST,
  meta: api.movie.getMovie(payload)
    .then(success(dispatch, GET_MOVIE_SUCCESS, payload))
    .catch(failure(dispatch, GET_MOVIE_FAILURE))
})
