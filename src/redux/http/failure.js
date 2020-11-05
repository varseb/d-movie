const failure = (dispatch, type, payload = {}) => error => {
  const { data } = error.response || { data : {} }

  return dispatch({
    type,
    payload: {
      ...payload,
      error: data.error
    }
  })
}

export default failure
