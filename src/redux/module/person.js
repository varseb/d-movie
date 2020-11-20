import api from 'redux/api'
import { success, failure } from 'redux/http'

import { GET_CREDITS_SUCCESS } from 'redux/module/movie'

const GET_PERSON_REQUEST = 'person/GET_PERSON_REQUEST'
const GET_PERSON_SUCCESS = 'person/GET_PERSON_SUCCESS'
const GET_PERSON_FAILURE = 'person/GET_PERSON_FAILURE'

const initialState = {
  persons: {}
}

export default function reducer(state = initialState, { type: actionType, payload }){
  switch( actionType ){
    case GET_PERSON_SUCCESS:
      return {
        persons: {
          ...state.persons,
          [payload.personId]: payload.data
        }
      }

    case GET_CREDITS_SUCCESS: {
      const { data: credits } = payload

      return {
        persons: credits.cast.reduce((persons, person) => ({
          ...persons,
          [person.id]: {
            id: person.id,
            name: person.name,
            profile_path: person.profile_path
          }
        }), { ...state.persons })
      }
    }

    default:
      return state
  }
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
