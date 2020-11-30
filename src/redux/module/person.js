import api from 'redux/api'
import { success, failure } from 'redux/http'

import { MULTI_SEARCH_SUCCESS } from './search'
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
    case GET_PERSON_SUCCESS: {
      const { personId } = payload

      return {
        ...state,
        persons: {
          ...state.persons,
          [personId]: {
            ...state.persons[personId],
            ...personDTO(payload.data)
          }
        }
      }
    }

    case GET_CREDITS_SUCCESS: {
      const { data: credits } = payload

      return {
        ...state,
        persons: storePersons({ state, results: credits.cast })
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

    case MULTI_SEARCH_SUCCESS: {
      const results = payload.data.results.filter(
        ({ media_type }) => media_type === 'person'
      )

      return {
        ...state,
        persons: storePersons({ state, results })
      }
    }

    default:
      return state
  }
}

export {
  GET_MOVIE_CREDITS_SUCCESS
}

const personDTO = person => {
  const p = {
    id: person.id,
    name: person.name,
    profile_path: person.profile_path,
    media_type: 'person'
  }

  if( person.known_for_department ){
    p.known_for_department = person.known_for_department
  }

  if( person.popularity ){
    p.popularity = person.popularity
  }

  if( person.place_of_birth ){
    p.place_of_birth = person.place_of_birth
  }

  if( person.birthday ){
    p.birthday = person.birthday
  }

  if( person.deathday ){
    p.deathday = person.deathday
  }

  if( person.biography ){
    p.biography = person.biography
  }

  return p
}

const storePersons = ({ state, results }) =>
  results.reduce((persons, person) => ({
    ...persons,
    [person.id]: {
      ...(state.persons[person.id] || {}),
      ...personDTO(person)
    }
  }), {
    ...state.persons
  }
)


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
