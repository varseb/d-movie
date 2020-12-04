import api from 'redux/api'
import { success, failure } from 'redux/http'


const GET_CREDITS_REQUEST = 'credit/GET_CREDITS_REQUEST'
const GET_CREDITS_SUCCESS = 'credit/GET_CREDITS_SUCCESS'
const GET_CREDITS_FAILURE = 'credit/GET_CREDITS_FAILURE'

const initialState = {
  cast: {},
  crew: {}
}

export default function creditReducer(state = initialState, { type: actionType, payload }){
  switch( actionType ){
    case GET_CREDITS_SUCCESS: {
      const { id, mediaType, data: { cast } } = payload

      return {
        ...state,
        cast: {
          ...state.cast,
          [mediaType]: {
            ...(state.cast[mediaType] || {}),
            [id]: cast.map(
              ({ id: personId, character, credit_id: creditId }) => ({
                personId,
                character,
                creditId
              })
            )
          }
        }
      }
    }

    default:
      return state
  }
}


export const getMovieCredits = payload => dispatch => dispatch({
  type: GET_CREDITS_REQUEST,
  meta: api.movie.getCredits(payload)
    .then(success(dispatch, GET_CREDITS_SUCCESS, {
      ...payload,
      mediaType: 'movie'
    }))
    .catch(failure(dispatch, GET_CREDITS_FAILURE))
})


export const getSerieCredits = payload => dispatch => dispatch({
  type: GET_CREDITS_REQUEST,
  meta: api.serie.getCredits(payload)
    .then(success(dispatch, GET_CREDITS_SUCCESS, {
      ...payload,
      mediaType: 'tv'
    }))
    .catch(failure(dispatch, GET_CREDITS_FAILURE))
})

