import axios from 'axios'
import { apiUrl, apiKey } from 'env'

const request = payload => {
  const params = payload.params || {}
  const options = {
    ...payload,
    url: apiUrl + payload.url,
    params: {
      ...params,
      api_key: apiKey
    }
  }

  return axios(options)
}

export default request
