const OPEN_STACK  = 'layout/OPEN_STACK'
const CLOSE_STACK = 'layout/CLOSE_STACK'

const initialState = {
  stack: []
}

const reducer = (state = initialState, { type: actionType, payload }) => {
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
        stack: state.stack.filter(({ namespace }) => namespace !== payload.namespace)
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

export const closeStack = namespace => payload => dispatch => dispatch({
  type: CLOSE_STACK,
  payload: {
    namespace
  }
})

export default reducer
