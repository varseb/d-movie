import axios from 'axios'
import { apiUrl, apiKey } from 'env'

const request = payload => axios({
  ...payload,
  url: apiUrl + payload.url,
  params: {
    ...(payload.params || {}),
    api_key: apiKey
  }
})

export default request
