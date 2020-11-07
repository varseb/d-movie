const CHANGE_LAGUAGE  = 'user/CHANGE_LAGUAGE'

const initialState = {
  language: navigator.language?.substr(0, 2) || 'en'
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
