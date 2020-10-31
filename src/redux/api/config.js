import { request } from 'redux/http'

export const getConfiguration = () => request({
  method: 'GET',
  url: '/configuration'
})
