import api from 'redux/api'
import { success, failure } from 'redux/http'

import { SEARCH_MOVIES_SUCCESS } from './search'

const DISCOVER_MOVIES_REQUEST = 'movie/DISCOVER_MOVIES_REQUEST'
const DISCOVER_MOVIES_SUCCESS = 'movie/DISCOVER_MOVIES_SUCCESS'
const DISCOVER_MOVIES_FAILURE = 'movie/DISCOVER_MOVIES_FAILURE'

const GET_MOVIE_REQUEST = 'movie/GET_MOVIE_REQUEST'
const GET_MOVIE_SUCCESS = 'movie/GET_MOVIE_SUCCESS'
const GET_MOVIE_FAILURE = 'movie/GET_MOVIE_FAILURE'

const GET_CREDITS_REQUEST = 'movie/GET_CREDITS_REQUEST'
const GET_CREDITS_SUCCESS = 'movie/GET_CREDITS_SUCCESS'
const GET_CREDITS_FAILURE = 'movie/GET_CREDITS_FAILURE'

const GET_VIDEOS_REQUEST = 'movie/GET_VIDEOS_REQUEST'
const GET_VIDEOS_SUCCESS = 'movie/GET_VIDEOS_SUCCESS'
const GET_VIDEOS_FAILURE = 'movie/GET_VIDEOS_FAILURE'

const initialState = {
  list: [],
  movies: {},
  credits: {},
  videos: {}
}

export default function movieReducer(state = initialState, { type: actionType, payload }){
  switch( actionType ){
    case DISCOVER_MOVIES_SUCCESS: {
      const { results } = payload.data

      const list = results.map(({ id }) => id)

      return {
        ...state,
        // on this array we just keep the id's of the movies
        // here lives our movies order
        list: payload.page === 1 ? list : [...new Set([
          ...state.list,
          ...list
        ])],

        // on this object we store all the returned movies from the api indexed by id
        // we use this movie object as single source of truth
        movies: indexMovies({ state, results })
      }
    }

    case SEARCH_MOVIES_SUCCESS: {
      const { results } = payload.data

      return {
        ...state,
        movies: indexMovies({ state, results })
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
            ...movieExtractor(movie)
          }
        }
      }
    }

    case GET_CREDITS_SUCCESS: {
      const { id, data: credits } = payload

      return {
        ...state,
        credits: {
          ...state.credits,
          [id]: credits
        }
      }
    }

    case GET_VIDEOS_SUCCESS: {
      const { id, language, data: { results: videos } } = payload

      return {
        ...state,
        videos: {
          ...state.videos,
          [id]: {
            ...(state.videos[id] || {}),
            [language]: videos
          }
        }
      }
    }

    default:
      return state
  }
}

const movieExtractor = movie => ({
  id: movie.id,
  title: movie.title,
  poster_path: movie.poster_path,
  backdrop_path: movie.backdrop_path,
  original_language: movie.original_language,
  genre_ids: movie.genre_ids || (movie.genres || []).map(({ id }) => id),
  vote_average: movie.vote_average,
  overview: movie.overview,
  release_date: movie.release_date,
  runtime: movie.runtime
})

const indexMovies = ({ state, results }) =>
  results.reduce((movies, movie) => ({
    ...movies,
    [movie.id]: {
      ...(state.movies[movie.id] || {}),
      ...movieExtractor(movie)
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

export const getCredits = payload => dispatch => dispatch({
  type: GET_CREDITS_REQUEST,
  meta: api.movie.getCredits(payload)
    .then(success(dispatch, GET_CREDITS_SUCCESS, payload))
    .catch(failure(dispatch, GET_CREDITS_FAILURE))
})

export const getVideos = payload => dispatch => dispatch({
  type: GET_VIDEOS_REQUEST,
  meta: api.movie.getVideos(payload)
    .then(success(dispatch, GET_VIDEOS_SUCCESS, payload))
    .catch(failure(dispatch, GET_VIDEOS_FAILURE))
})
