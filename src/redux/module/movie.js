import api from 'redux/api'
import { success, failure } from 'redux/http'

const DISCOVER_MOVIES_REQUEST = 'movie/DISCOVER_MOVIES_REQUEST'
const DISCOVER_MOVIES_SUCCESS = 'movie/DISCOVER_MOVIES_SUCCESS'
const DISCOVER_MOVIES_FAILURE = 'movie/DISCOVER_MOVIES_FAILURE'

const initialState = {
  list: [],
  movies: {}
}

const reducer = (state = initialState, { type: actionType, payload }) => {
  switch( actionType ){
    case DISCOVER_MOVIES_SUCCESS: {
      const { results } = payload.data

      return {
        ...state,
        // on this array we just keep the id's of the movies, here are our movie order
        list: results.map(({ id }) => id),

        // on this object we store all the returned movies from the api indexed by id
        // we keep this as source of true and allow us better access to the data
        movies: {
          ...results.reduce((movies, movie) => ({
            ...movies,
            [movie.id]: movie
          }), { ...state.movies })
        }
      }
    }

    default:
      return state
  }
}


export const discoverMovies = () => dispatch => {
  dispatch({
    type: DISCOVER_MOVIES_REQUEST
  })

  api.movie.discoverMovies()
    .then(success(DISCOVER_MOVIES_SUCCESS))
    .catch(failure(DISCOVER_MOVIES_FAILURE))
}


export default reducer
