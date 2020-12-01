const initialState = {
  loading: {},
  success: {},
  failure: {}
}

export default function reducer(state = initialState, { type: actionType }){
  const matches = /(\w+)\/(\w+)_(REQUEST|SUCCESS|FAILURE)/.exec(actionType)

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
    failure: {
      ...state.failure,
      [namespace]: requestState === 'FAILURE'
    }
  }
}
