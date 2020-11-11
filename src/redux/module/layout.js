const OPEN_STACK  = 'layout/OPEN_STACK'
const CLOSE_STACK = 'layout/CLOSE_STACK'

const UPDATE_VIDEO_STATE = 'layout/UPDATE_VIDEO_STATE'

const OPEN_TOAST  = 'layout/OPEN_TOAST'
const CLOSE_TOAST = 'layout/CLOSE_TOAST'

const initialState = {
  stack: [],
  playingVideo: false,
  toast: {
    open: false,
    message: null
  }
}

export default function reducer(state = initialState, { type: actionType, payload }){
  switch( actionType ){
    case OPEN_STACK: {
      const { namespace, props } = payload

      return {
        ...state,
        stack: [
          ...state.stack,
          {
            namespace,
            props: props || {}
          }
        ]
      }
    }

    case CLOSE_STACK:
      return {
        ...state,
        stack: state.stack.slice(0, -1)
      }

    case UPDATE_VIDEO_STATE:
      return {
        ...state,
        playingVideo: payload.playing
      }

    case OPEN_TOAST:
      return {
        ...state,
        toast: {
          open: true,
          message: payload.message
        }
      }

    case CLOSE_TOAST:
      return {
        ...state,
        toast: initialState.toast
      }

    default:
      return state
  }
}

export const openStack = namespace => props => dispatch => dispatch({
  type: OPEN_STACK,
  payload: {
    namespace,
    props
  }
})

export const closeStack = () => dispatch => dispatch({
  type: CLOSE_STACK
})

export const updateVideoState = payload => dispatch => dispatch({
  type: UPDATE_VIDEO_STATE,
  payload
})


export const openToast = payload => dispatch => dispatch({
  type: OPEN_TOAST,
  payload
})


export const closeToast = () => dispatch => dispatch({
  type: CLOSE_TOAST
})
