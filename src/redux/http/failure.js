import store from 'redux/store'

const failure = (type, payload = {}) => error => {

  const { data } = error.response || { data : {} }

  const result = store.dispatch({
    type,
    payload: {
      ...payload,
      error: data.error
    }
  })

  return result
}


export default failure
