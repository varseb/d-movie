import { request } from 'redux/http'


export const discoverMovies = () => request({
  method: 'GET',
  url: '/discover/movie'
})

