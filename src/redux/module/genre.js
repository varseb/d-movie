import api from 'redux/api'
import { success, failure } from 'redux/http'

const GET_GENRES_REQUEST = 'genre/GET_GENRES_REQUEST'
const GET_GENRES_SUCCESS = 'genre/GET_GENRES_SUCCESS'
const GET_GENRES_FAILURE = 'genre/GET_GENRES_FAILURE'

const initialState = {
  genres: {}
}

export default function reducer(state = initialState, { type: actionType, payload }){
  switch( actionType ){
    case GET_GENRES_SUCCESS: {
      const { genres } = payload.data

      return {
        // Index genres by id for better access
        genres: genres.reduce((genres, genre) => ({
          ...genres,
          [genre.id]: genre
        }), {})
      }
    }

    default:
      return state
  }
}

export const getGenres = () => dispatch => dispatch({
  type: GET_GENRES_REQUEST,
  meta: api.genre.getGenres()
    .then(success(dispatch, GET_GENRES_SUCCESS))
    .catch(failure(dispatch, GET_GENRES_FAILURE))
})
