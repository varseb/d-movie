import { request } from 'redux/http'

export const discoverMovies = ({ page, language }) => request({
  method: 'GET',
  url: '/discover/movie',
  params: {
    page,
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
