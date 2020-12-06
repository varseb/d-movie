const CHANGE_LAGUAGE  = 'user/CHANGE_LAGUAGE'

const initialState = {
  language: (navigator.language?.substr(0, 2) || 'en').toLowerCase(),
  country:  'AR' //(navigator.language?.substr(-2) || 'US').toUpperCase()
}

export default function reducer(state = initialState, { type: actionType, payload }){
  switch( actionType ){
    case CHANGE_LAGUAGE:
      return {
        ...state,
        language: payload.language
      }

    default:
      return state
  }
}

export const changeLanguage = payload => dispatch => dispatch({
  type: CHANGE_LAGUAGE,
  payload
})
