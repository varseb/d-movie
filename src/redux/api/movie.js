import { request } from 'redux/http'

export const discoverMovies = ({ language }) => request({
  method: 'GET',
  url: '/discover/movie',
  params: {
    language
  }
})

export const getMovie = ({ id, language }) => request({
  method: 'GET',
  url: `/movie/${id}`,
  params: {
    language
  }
})

export const getCredits = ({ id }) => request({
  method: 'GET',
  url: `/movie/${id}/credits`
})

export const getVideos = ({ id, language }) => request({
  method: 'GET',
  url: `/movie/${id}/videos`,
  params: {
    language
  }
})
