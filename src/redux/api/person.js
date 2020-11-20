import { request } from 'redux/http'

export const getPerson = ({ personId, language }) => request({
  method: 'GET',
  url: `/person/${personId}`,
  params: {
    language,
    //append_to_response: 'movie_credits'
  }
})
