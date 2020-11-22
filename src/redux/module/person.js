import api from 'redux/api'
import { success, failure } from 'redux/http'

import { GET_CREDITS_SUCCESS } from 'redux/module/movie'

const GET_PERSON_REQUEST = 'person/GET_PERSON_REQUEST'
const GET_PERSON_SUCCESS = 'person/GET_PERSON_SUCCESS'
const GET_PERSON_FAILURE = 'person/GET_PERSON_FAILURE'

const GET_MOVIE_CREDITS_REQUEST = 'person/GET_MOVIE_CREDITS_REQUEST'
const GET_MOVIE_CREDITS_SUCCESS = 'person/GET_MOVIE_CREDITS_SUCCESS'
const GET_MOVIE_CREDITS_FAILURE = 'person/GET_MOVIE_CREDITS_FAILURE'

const initialState = {
  persons: {},
  movies: {}
}

export default function reducer(state = initialState, { type: actionType, payload }){
  switch( actionType ){
    case GET_PERSON_SUCCESS:
      return {
        ...state,
        persons: {
          ...state.persons,
          [payload.personId]: payload.data
        }
      }

    case GET_CREDITS_SUCCESS: {
      const { data: credits } = payload

      return {
        ...state,
        persons: credits.cast.reduce((persons, person) => ({
          ...persons,
          [person.id]: {
            ...(state.persons[person.id] || {}),
            id: person.id,
            name: person.name,
            profile_path: person.profile_path
          }
        }), { ...state.persons })
      }
    }

    case GET_MOVIE_CREDITS_SUCCESS: {
      const { cast } = payload.data

      return {
        ...state,
        movies: {
          ...state.movies,
          [payload.personId]: [...new Set([ ...cast.map(({ id }) => id) ])]
        }
      }
    }

    default:
      return state
  }
}

export {
  GET_MOVIE_CREDITS_SUCCESS
}

/*
const personDTO = person => {
  const p = {
    id: person.id,
    name: person.name,
    profile_path: person.profile_path,
    character: person.character
  }

  return p
}
*/

export const getPerson = payload => dispatch => dispatch({
  type: GET_PERSON_REQUEST,
  meta: api.person.getPerson(payload)
    .then(success(dispatch, GET_PERSON_SUCCESS, payload))
    .catch(failure(dispatch, GET_PERSON_FAILURE))
})

export const getMovieCredits = payload => dispatch => dispatch({
  type: GET_MOVIE_CREDITS_REQUEST,
  meta: api.person.getMovieCredits(payload)
    .then(success(dispatch, GET_MOVIE_CREDITS_SUCCESS, payload))
    .catch(failure(dispatch, GET_MOVIE_CREDITS_FAILURE))
})
