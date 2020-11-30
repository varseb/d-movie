import { request } from 'redux/http'

export const searchMovies = ({ query, language }) => request({
  method: 'GET',
  url: '/search/movie',
  params: {
    query,
    language,
    //include_adult: true
  }
})


export const multiSearch = ({ query, language }) => request({
  method: 'GET',
  url: '/search/multi',
  params: {
    query,
    language,
    //include_adult: true
  }
})
