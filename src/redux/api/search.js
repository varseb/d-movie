import { request } from 'redux/http'

export const searchMovies = ({ query }) => request({
  method: 'GET',
  url: '/search/movie',
  params: {
    query
  }
})

