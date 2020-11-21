const failure = (dispatch, type, payload = {}) => error => {

  if( process.env.NODE_ENV === 'development' && error instanceof TypeError ){
    throw error
  }

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
