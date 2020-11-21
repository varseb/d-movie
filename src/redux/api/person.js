import { request } from 'redux/http'

export const getPerson = ({ personId, language }) => request({
  method: 'GET',
  url: `/person/${personId}`,
  params: {
    language
  }
})

export const getMovieCredits = ({ personId, language }) => request({
  method: 'GET',
  url: `/person/${personId}/movie_credits`,
  params: {
    language
  }
})
