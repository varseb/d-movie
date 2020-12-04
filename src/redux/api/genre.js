import { request } from 'redux/http'

export const getMovieGenres = ({ language }) => request({
  method: 'GET',
  url: '/genre/movie/list',
  params: {
    language
  }
})

export const getSerieGenres = ({ language }) => request({
  method: 'GET',
  url: '/genre/tv/list',
  params: {
    language
  }
})
