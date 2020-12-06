import { request } from 'redux/http'

export const getSerie = ({ id, language }) => request({
  method: 'GET',
  url: `/tv/${id}`,
  params: {
    language
  }
})

export const getProviders = ({ id }) => request({
  method: 'GET',
  url: `/tv/${id}/watch/providers`
})

export const getCredits = ({ id }) => request({
  method: 'GET',
  url: `/tv/${id}/credits`
})

export const getVideos = ({ id, language }) => request({
  method: 'GET',
  url: `/tv/${id}/videos`,
  params: {
    language
  }
})
