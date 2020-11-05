const success = (dispatch, type, payload = {}) => response => dispatch({
  type,
  payload: {
    ...payload,
    data: response.data
  }
})

export default success
