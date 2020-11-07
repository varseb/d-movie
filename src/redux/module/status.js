const initialState = {
  loading: {},
  success: {},
  failure: {}
}

export default function reducer(state = initialState, { type: actionType, payload = {} }){
  const matches = /(\w+)\/(\w+)_(REQUEST|SUCCESS|ERROR)/.exec(actionType)

  if (!matches){
    return state
  }

  const [, reducerName, actionName, requestState] = matches

  const namespace = `${reducerName}/${actionName}`

  return {
    ...state,
    loading: {
      ...state.loading,
      [namespace]: requestState === 'REQUEST'
    },
    success: {
      ...state.success,
      [namespace]: requestState === 'SUCCESS'
    },
    error: {
      ...state.error,
      [namespace]: requestState === 'FAILURE'
    }
  }
}
