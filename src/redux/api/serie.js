import { request } from 'redux/http'

export const getSerie = ({ id }) => request({
  method: 'GET',
  url: `/tv/${id}`
})

export const getCredits = ({ id }) => request({
  method: 'GET',
  url: `/tv/${id}/credits`
})
