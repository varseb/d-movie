import { request } from 'redux/http'

export const discoverMovies = () => request({
  method: 'GET',
  url: '/discover/movie'
})

export const getMovie = ({ id }) => request({
  method: 'GET',
  url: `/movie/${id}`
})

export const getCredits = ({ id }) => request({
  method: 'GET',
  url: `/movie/${id}/credits`
})

export const getVideos = ({ id }) => request({
  method: 'GET',
  url: `/movie/${id}/videos`
})
