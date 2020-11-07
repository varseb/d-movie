import { request } from 'redux/http'

export const getGenres = ({ language }) => request({
  method: 'GET',
  url: '/genre/movie/list',
  params: {
    language
  }
})
