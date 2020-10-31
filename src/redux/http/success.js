import store from 'redux/store'

const success = (type, payload = {}) => response => {

  const result = store.dispatch({
    type,
    payload: {
      ...payload,
      data: response.data
    }
  })

  return result
}


export default success
