import { request } from 'redux/http'

export const getGenres = () => request({
  method: 'GET',
  url: '/genre/movie/list'
})
