const OPEN_STACK  = 'layout/OPEN_STACK'
const CLOSE_STACK = 'layout/CLOSE_STACK'

const initialState = {
  stack: []
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
