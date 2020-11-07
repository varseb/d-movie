import { request } from 'redux/http'

export const searchMovies = ({ query, language }) => request({
  method: 'GET',
  url: '/search/movie',
  params: {
    query,
    language
  }
})
